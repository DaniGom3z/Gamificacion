# Sistema de Gamificación - Arquitectura DDD

Este proyecto implementa un sistema de gamificación siguiendo los principios de **Domain-Driven Design (DDD)**.

## 🏗️ Arquitectura DDD

### Capas de la Arquitectura

```
src/gamificacion/
├── domain/           # Capa de Dominio
│   ├── entities/     # Entidades del dominio
│   ├── valueObjects/ # Objetos de valor
│   ├── aggregates/   # Agregados raíz
│   ├── services/     # Servicios de dominio
│   ├── events/       # Eventos de dominio
│   ├── repositories/ # Interfaces de repositorios
│   └── boundedContexts/ # Contextos delimitados
├── application/      # Capa de Aplicación
│   ├── useCases/     # Casos de uso
│   ├── services/     # Servicios de aplicación
│   ├── dtos/         # Objetos de transferencia de datos
│   └── events/       # Eventos de aplicación
└── infrastructure/   # Capa de Infraestructura
    ├── adapters/     # Adaptadores (controladores, routers)
    ├── repositories/ # Implementaciones de repositorios
    ├── prisma/       # Configuración de base de datos
    └── http/         # Middleware HTTP
```

## 🎯 Principios DDD Implementados

### 1. Ubiquitous Language
- **Logro**: Un logro que puede ser desbloqueado por los usuarios
- **Puntos**: Sistema de puntuación para medir el progreso
- **Desbloquear**: Acción de obtener un logro
- **Usuario**: Entidad que participa en el sistema de gamificación

### 2. Bounded Contexts
- **GamificacionBoundedContext**: Delimita todo lo relacionado con logros, puntos y progreso del usuario

### 3. Aggregates
- **UsuarioAggregate**: Agregado raíz que mantiene la consistencia del estado del usuario y sus logros

### 4. Value Objects
- **LogroId**: Identificador único de un logro
- **UsuarioId**: Identificador único de un usuario
- **LogroNombre**: Nombre del logro con validaciones
- **Puntos**: Cantidad de puntos con operaciones matemáticas

### 5. Domain Events
- **LogroDesbloqueadoEvent**: Se dispara cuando un usuario desbloquea un logro

### 6. Repository Pattern
- Interfaces en el dominio
- Implementaciones en la infraestructura

## 📁 Estructura Detallada

### Domain Layer

#### Entities
- `Logro`: Entidad que representa un logro del sistema
- `UsuarioLogro`: Entidad que representa la relación usuario-logro

#### Value Objects
- `LogroId`: ID único de logro con validaciones
- `UsuarioId`: ID único de usuario con validaciones
- `LogroNombre`: Nombre de logro con reglas de negocio
- `Puntos`: Sistema de puntos con operaciones matemáticas

#### Aggregates
- `UsuarioAggregate`: Agregado raíz que maneja el estado del usuario

#### Domain Services
- `GamificacionService`: Implementa reglas de negocio específicas

#### Domain Events
- `DomainEvent`: Clase base para eventos de dominio
- `LogroDesbloqueadoEvent`: Evento específico de logro desbloqueado

### Application Layer

#### Use Cases
- `DesbloquearLogro`: Caso de uso para desbloquear un logro
- `ListarLogrosDeUsuario`: Caso de uso para listar logros de un usuario

#### Application Services
- `GamificacionApplicationService`: Orquesta los casos de uso

#### DTOs
- `DesbloquearLogroDto`: DTO para desbloquear logro
- `LogroDto`: DTO para representar un logro
- `UsuarioGamificacionDto`: DTO para información completa de gamificación

### Infrastructure Layer

#### Adapters
- `GamificacionController`: Controlador HTTP
- `GamificacionRouter`: Router de Express

#### Repositories
- `LogroPrismaRepository`: Implementación con Prisma
- `UsuarioLogroPrismaRepository`: Implementación con Prisma

## 🔄 Flujo de Datos

1. **HTTP Request** → Controller
2. **Controller** → Application Service
3. **Application Service** → Use Case
4. **Use Case** → Domain (Aggregate/Service)
5. **Domain** → Repository (Interface)
6. **Repository** → Database (Implementation)

## 🎮 Casos de Uso Principales

### Desbloquear Logro
```typescript
// 1. Usuario envía request
POST /api/gamificacion/logros/desbloquear
{
  "idLogro": 1
}

// 2. Controller valida y delega
// 3. Application Service orquesta
// 4. Use Case ejecuta lógica de negocio
// 5. Domain Aggregate mantiene consistencia
// 6. Domain Event se publica
// 7. Repository persiste cambios
```

### Listar Logros de Usuario
```typescript
// 1. Usuario envía request
GET /api/gamificacion/logros

// 2. Controller valida token
// 3. Application Service obtiene datos
// 4. Use Case consulta repositorio
// 5. DTOs transforman datos
// 6. Response se envía al cliente
```

## 🚀 Beneficios de esta Arquitectura

### 1. Separación de Responsabilidades
- Cada capa tiene una responsabilidad específica
- El dominio no depende de la infraestructura

### 2. Testabilidad
- Fácil mockear interfaces
- Tests unitarios del dominio
- Tests de integración por capa

### 3. Mantenibilidad
- Cambios en una capa no afectan otras
- Código organizado y predecible

### 4. Escalabilidad
- Fácil agregar nuevos casos de uso
- Fácil cambiar implementaciones

### 5. Flexibilidad
- Cambiar base de datos sin afectar dominio
- Agregar nuevos adaptadores fácilmente

## 🛠️ Tecnologías Utilizadas

- **TypeScript**: Tipado estático
- **Express**: Framework web
- **Prisma**: ORM para base de datos
- **JWT**: Autenticación
- **MySQL**: Base de datos

## 📝 Próximos Pasos

1. **Implementar Event Handlers**: Para procesar eventos de dominio
2. **Agregar Validaciones**: Más reglas de negocio en Value Objects
3. **Implementar CQRS**: Separar comandos y consultas
4. **Agregar Tests**: Tests unitarios y de integración
5. **Documentar APIs**: Swagger/OpenAPI
6. **Monitoreo**: Logs y métricas

## 🔧 Configuración

```bash
# Instalar dependencias
npm install

# Configurar base de datos
cp .env.example .env
# Editar DATABASE_URL en .env

# Ejecutar migraciones
npx prisma migrate dev

# Iniciar servidor
npm start
```

## 📚 Referencias DDD

- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [DDD Reference](https://domainlanguage.com/ddd/reference/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 