# Reporte: Estado del Arte Técnico — Soberanía sobre el Criterio Humano

**Fundación Soberanía Cognitiva | Investigación Técnica**  
**Fecha:** 6 de marzo de 2026

---

## Resumen Ejecutivo

Existen tecnologías relevantes en las tres áreas investigadas, pero **ninguna aborda directamente el problema central de la fundación**: la extracción del criterio humano (correcciones, feedback, patrones de decisión) por plataformas de IA sin consentimiento ni compensación. Las herramientas existentes cubren datos personales y contenido, pero el "criterio" como activo distinto es un vacío conceptual y técnico que la fundación podría llenar.

---

## 1. Protocolos de Soberanía de Datos Personales

### Qué existe hoy

| Tecnología | Quién | Estado | Qué hace |
|---|---|---|---|
| **Solid (Social Linked Data)** | Tim Berners-Lee / Inrupt / W3C | Activo. $30M Serie A (2021). Stewardship bajo Open Data Institute desde oct 2024. | Pods personales donde el usuario almacena sus datos y controla acceso. Las apps piden permiso al pod, no al revés. |
| **DIDs (Decentralized Identifiers)** | W3C (estándar aprobado) | Maduro como estándar. Múltiples implementaciones. EU adoptándolo via eIDAS 2.0 / EUDI Wallet. | Identificadores descentralizados que no dependen de un registro central. Base de identidad auto-soberana (SSI). |
| **Verifiable Credentials (VCs)** | W3C (v2.0 publicado) | Estándar maduro. | Credenciales digitales firmadas criptográficamente. Modelo emisor-titular-verificador. El titular controla qué comparte. |
| **Self-Sovereign Identity (SSI)** | Ecosistema amplio (Sovrin, Hyperledger Aries, etc.) | Concepto consolidado, adopción fragmentada. | Marco general: DIDs + VCs + wallets digitales para que la persona controle su identidad sin intermediarios. |
| **AT Protocol (Bluesky)** | Bluesky PBC | En producción (Bluesky activo). | Usa DIDs para identidad portable entre servicios. Prueba real de identidad descentralizada a escala. |

### Qué funciona y qué no

**Funciona:**
- Solid tiene la arquitectura correcta (datos en pods personales, apps piden acceso)
- DIDs y VCs son estándares W3C maduros con adopción gubernamental (EU)
- Bluesky/AT Protocol demostró identidad portable funcionando a escala

**No funciona (para nuestro caso):**
- Solid está diseñado para datos estructurados (contactos, fotos, documentos), **no para interacciones cognitivas** (correcciones a un modelo, feedback implícito, patrones de decisión)
- SSI protege identidad, no criterio — saber *quién eres* ≠ proteger *cómo piensas*
- Ninguno tiene mecanismo para capturar y encapsular "criterio" como un activo controlable

---

## 2. Propiedad sobre Modelos Derivados (Data Provenance + Unlearning)

### Qué existe hoy

| Tecnología | Quién | Estado | Qué hace |
|---|---|---|---|
| **Machine Unlearning** | Academia (Stanford, Google, etc.) | Investigación activa. Google hizo competencia NeurIPS 2023. | Permite "olvidar" datos específicos de un modelo sin reentrenarlo completo. Motivado por GDPR Art. 17 ("derecho al olvido"). |
| **SISA (Sharded, Isolated, Sliced, Aggregated)** | Academia | Propuesta teórica con implementaciones experimentales. | Entrena modelos en shards aislados para que borrar datos de un shard no afecte otros. |
| **C2PA (Content Credentials)** | Adobe, Microsoft, BBC, Intel, otros | Estándar activo, adoptado por cámaras y plataformas. | Metadatos criptográficos de proveniencia para contenido digital (fotos, video). Rastrea origen y ediciones. |
| **Model Cards** | Google (propuesto 2018), ahora estándar de facto | Ampliamente adoptados (Hugging Face los usa). | Documentación estandarizada de modelos: datos de entrenamiento, limitaciones, uso previsto. |
| **Data Lineage / Provenance** | Industria de datos (Collibra, Alation, etc.) | Maduro en enterprise. | Rastreo del origen, transformaciones y movimiento de datos en sistemas empresariales. |
| **OpenMined / Syft** | OpenMined (non-profit 501c3) | Activo. Red federada en beta. | Red de computación federada: los datos no se mueven, el cómputo va a los datos. Control basado en atribución. Subredes para publishers, creadores, genómica, auditores de IA. |

### Qué funciona y qué no

**Funciona:**
- C2PA funciona bien para contenido multimedia (fotos, videos) — Adobe y Microsoft lo usan en producción
- Model Cards son estándar en Hugging Face, dan transparencia básica
- OpenMined es **el proyecto más alineado con la visión de la fundación**: computación federada donde los datos nunca salen del control del dueño, con atribución y compensación

**No funciona (para nuestro caso):**
- Machine Unlearning es computacionalmente caro y **no verificable**: no puedes probar que el modelo realmente "olvidó" tus datos
- SISA sacrifica precisión del modelo y requiere diseñar el entrenamiento desde cero — las grandes plataformas no lo usan
- C2PA rastrea contenido, no criterio — saber quién tomó la foto ≠ saber quién corrigió al modelo
- Model Cards son declarativos (la empresa dice qué usó), no verificables por terceros
- **No existe ningún mecanismo técnico confiable para demostrar que el criterio específico de una persona fue usado para entrenar un modelo.** Este es el vacío más grande.

---

## 3. Protocolos de Consentimiento y Compensación

### Qué existe hoy

| Tecnología | Quién | Estado | Qué hace |
|---|---|---|---|
| **Ocean Protocol** | Ocean Protocol Foundation | Activo. Foco en tokenización de datos y modelos IA. "Compute-to-Data" en producción. | Marketplace descentralizado: Data NFTs + Datatokens para controlar acceso a datos. Compute-to-Data permite que el comprador ejecute algoritmos sobre tus datos sin verlos. |
| **Data Union DAO** | Data Union DAO / Streamr | Activo. 6 Data Unions, 400K+ miembros, $30M+ en funding. | Framework para que grupos de personas agreguen datos y los vendan colectivamente. Pagos uno-a-muchos via Ethereum. |
| **Swash** | Swash | Activo. | Extensión de navegador — primer Data Union funcional. Los usuarios monetizan sus datos de navegación. |
| **DIMO** | DIMO | Activo. | Data Union para datos vehiculares. Los conductores monetizan telemetría de sus vehículos. |
| **Data Trusts Initiative** | Cambridge / Open Data Institute | Investigación activa. | Marco legal-técnico donde un fiduciario administra datos en nombre de un grupo, con obligaciones legales de actuar en su interés. |

### Qué funciona y qué no

**Funciona:**
- Ocean Protocol tiene infraestructura real: Compute-to-Data funciona y es el concepto más cercano a "usa mi dato sin llevártelo"
- Data Unions demuestran que la monetización colectiva es viable (Swash tiene usuarios reales)
- Data Trusts como concepto legal complementa bien lo técnico

**No funciona (para nuestro caso):**
- Ocean Protocol está orientado a datasets y modelos, no a interacciones cognitivas individuales (correcciones, feedback)
- Data Unions monetizan datos brutos (navegación, vehículos), no criterio refinado
- Los montos de compensación actuales son ínfimos — los datos de un individuo aislado valen poco; el valor está en el agregado
- **Nadie ha resuelto cómo medir y compensar la contribución cognitiva específica de una persona al entrenamiento de un modelo**

---

## Vacíos que la Fundación Podría Llenar

### Vacío 1: El "criterio" no está definido como activo técnico
Nadie ha formalizado qué es el criterio humano en términos de datos. ¿Son las correcciones a un chatbot? ¿Los thumbs up/down? ¿Los patrones de decisión? ¿Las reformulaciones de prompts? La fundación podría definir una **ontología del criterio cognitivo** — qué tipos de interacciones constituyen criterio, cómo se capturan, cómo se encapsulan.

### Vacío 2: No hay "pod de criterio"
Solid tiene pods para datos personales. No existe equivalente para el criterio. Un **Cognitive Pod** que capture, almacene y controle acceso a las interacciones cognitivas de una persona con sistemas de IA sería novel.

### Vacío 3: No hay proveniencia verificable para contribuciones de entrenamiento
C2PA rastrea fotos. Model Cards documentan datasets. Pero no hay estándar para registrar: "esta persona corrigió este output del modelo N veces, y eso mejoró el modelo en X%". Una **Credential de Contribución Cognitiva** (basada en VCs) sería un primitivo nuevo.

### Vacío 4: No hay consentimiento granular para uso cognitivo
Los ToS actuales son binarios: aceptas todo o no usas el servicio. No existe un protocolo donde digas "puedes usar mis correcciones para mejorar respuestas en español, pero no para entrenar modelos comerciales". Un **protocolo de consentimiento cognitivo granular** no existe.

---

## Recomendación: 2-3 Tecnologías para un Prototipo

### 1. 🥇 OpenMined/Syft + Concepto de "Cognitive Pod"
**Por qué:** OpenMined ya construye infraestructura para computación federada con control basado en atribución. Su modelo de "los datos no se mueven, el cómputo va a ellos" es exactamente lo que necesitamos para el criterio. La fundación podría contribuir un nuevo tipo de "subred" en Syft específica para interacciones cognitivas.

**Acción concreta:** Contactar a OpenMined (son non-profit, misión alineada) para explorar colaboración. Construir un prototipo de "Cognitive Pod" como nodo en la red Syft.

### 2. 🥈 DIDs + Verifiable Credentials para "Credenciales de Contribución Cognitiva"
**Por qué:** DIDs y VCs son estándares W3C maduros con ecosistema amplio. La fundación podría definir un nuevo tipo de Verifiable Credential que certifique: "esta persona contribuyó criterio de tipo X al modelo Y en fecha Z". Esto crea un registro verificable sin revelar el criterio mismo.

**Acción concreta:** Definir un schema de VC para contribuciones cognitivas. Implementar un prototipo usando librerías existentes (SpruceID, Veramo, etc.).

### 3. 🥉 Ocean Protocol Compute-to-Data para monetización
**Por qué:** Si el criterio se encapsula correctamente, Ocean Protocol ya tiene la infraestructura para que una empresa pague por "computar sobre" tu criterio sin llevárselo. Data NFTs podrían representar el criterio de una persona, y Datatokens controlar quién accede.

**Acción concreta:** Prototipo donde un usuario encapsula sus interacciones cognitivas como Data NFT, define reglas de acceso via Datatokens, y permite Compute-to-Data sobre ellas.

---

## Stack Propuesto para Prototipo

```
┌─────────────────────────────────────┐
│     Capa de Identidad (DID + VC)    │  ← Quién soy, qué contribuí
├─────────────────────────────────────┤
│    Cognitive Pod (inspirado Solid    │  ← Mis interacciones cognitivas
│    + OpenMined/Syft federado)        │    almacenadas bajo mi control
├─────────────────────────────────────┤
│   Capa de Consentimiento Granular   │  ← Qué permito, a quién, para qué
├─────────────────────────────────────┤
│  Capa de Compensación (Ocean/Token) │  ← Monetización si autorizo uso
└─────────────────────────────────────┘
```

---

## Nota de Rigor

- **No existe hoy** un sistema que haga exactamente lo que la fundación necesita. Esto es bueno: hay espacio real para innovar.
- **Machine Unlearning no es solución viable** para nuestro problema — es retroactivo, caro y no verificable.
- **El mayor desafío no es técnico sino de adopción**: convencer a plataformas de IA de adoptar estos protocolos requiere presión regulatoria o masa crítica de usuarios.
- La regulación (GDPR, EU AI Act) está empujando en la dirección correcta pero no cubre "criterio cognitivo" explícitamente. Hay oportunidad de influir en política pública.

---

*Investigación realizada con fuentes verificadas: W3C, Wikipedia, sitios oficiales de proyectos. Información actualizada a marzo 2026.*
