// --- 2. DATOS PARA ECHARTS (NUEVO: TRADUCCIÓN DE TU MINDMAP) ---
// Variable de datos con colores manuales para asegurar que las líneas se pinten
const echartDataFuentes = {
    name: "Fuentes\nPrimarias",
    // Nodo Central (Azul)
    itemStyle: { color: '#EF6C00', borderColor: '#fff', shadowBlur: 10 },
    label: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
    children: [
        {
            name: "APIs y Bases de Datos\nOperacionales",
            itemStyle: { color: '#FFF176' },
            children: [
                // --- RAMA ADAMANTINE (ROSA) ---
                {
                    name: "Adamantine Suite\nCréditos",
                    itemStyle: { color: '#F48FB1' }, 
                    // Configuración del Padre
                    emphasis: {
                        itemStyle: { color: '#E91E63', borderColor: '#fff', borderWidth: 2, shadowBlur: 20, shadowColor: '#E91E63' },
                        label: { backgroundColor: '#FCE4EC', borderColor: '#E91E63', borderWidth: 1, color: '#880E4F', fontWeight: 'bold' }
                    },
                    // HIJOS: Aquí definimos que sus líneas sean ROSAS siempre
                    children: [
                        { 
                            name: "raw.creditos_as",
                            itemStyle: { color: '#F48FB1' }, // Bolita rosa
                            lineStyle: { color: '#F48FB1', width: 2 } // LÍNEA ROSA
                        },
                        { 
                            name: "raw.creditos\n_historica",
                            itemStyle: { color: '#F48FB1' },
                            lineStyle: { color: '#F48FB1', width: 2 }
                        },
                        { 
                            name: "raw.bitacora\n_judicial",
                            itemStyle: { color: '#F48FB1' },
                            lineStyle: { color: '#F48FB1', width: 2 }
                        }
                    ]
                },
                // --- RAMA UPNIFY (MORADO) ---
                {
                    name: "Upnify CRM\ny Ventas",
                    itemStyle: { color: '#CE93D8' },
                    emphasis: {
                        itemStyle: { color: '#9C27B0', borderColor: '#fff', borderWidth: 2, shadowBlur: 20, shadowColor: '#E040FB' },
                        label: { backgroundColor: '#F3E5F5', borderColor: '#9C27B0', borderWidth: 1, color: '#4A148C', fontWeight: 'bold' }
                    },
                    children: [
                        { 
                            name: "raw.upnify\n_ventas",
                            itemStyle: { color: '#CE93D8' }, // Bolita morada
                            lineStyle: { color: '#CE93D8', width: 2 } // LÍNEA MORADA
                        },
                        { 
                            name: "raw.upnify\n_prospectos",
                            itemStyle: { color: '#CE93D8' },
                            lineStyle: { color: '#CE93D8', width: 2 }
                        },
                        { 
                            name: "raw.upnify\n_oportunidades",
                            itemStyle: { color: '#CE93D8' },
                            lineStyle: { color: '#CE93D8', width: 2 }
                        },
                        { 
                            name: "raw.upnify\n_productos",
                            itemStyle: { color: '#CE93D8' },
                            lineStyle: { color: '#CE93D8', width: 2 }
                        },
                        { 
                            name: "raw.upnify\n_seguimientos",
                            itemStyle: { color: '#CE93D8' },
                            lineStyle: { color: '#CE93D8', width: 2 }
                        },
                        { 
                            name: "raw.upnify\n_prod_oportunidades",
                            itemStyle: { color: '#CE93D8' },
                            lineStyle: { color: '#CE93D8', width: 2 }
                        }
                    ]
                },
                // --- RAMA CISHF (ROJO) ---
                {
                    name: "CISHF\nBase de Datos",
                    itemStyle: { color: '#F44336' },
                    emphasis: {
                        itemStyle: { color: '#D32F2F', borderColor: '#fff', borderWidth: 2, shadowBlur: 20, shadowColor: '#D32F2F' },
                        label: { backgroundColor: '#FFCDD2', borderColor: '#D32F2F', borderWidth: 1, color: '#B71C1C', fontWeight: 'bold' }
                    },
                    children: [
                        { 
                            name: "raw.reportes\n_mora21",
                            itemStyle: { color: '#F44336' },
                            lineStyle: { color: '#F44336', width: 2 } // LÍNEA ROJA
                        }
                    ]
                }
            ]
        },
        {
            name: "ArchivosLocales\ny Reportes",
            itemStyle: { color: '#AED581' },
            children: [
                // --- RAMA COBRANZA (AZUL) ---
                {
                    name: "Reportes de\nCobranza",
                    itemStyle: { color: '#90CAF9' },
                    emphasis: {
                        itemStyle: { color: '#2196F3', borderColor: '#fff', borderWidth: 2, shadowBlur: 20, shadowColor: '#2196F3' },
                        label: { backgroundColor: '#E3F2FD', borderColor: '#2196F3', borderWidth: 1, color: '#0D47A1', fontWeight: 'bold' }
                    },
                    children: [
                        { 
                            name: "raw.negociaciones",
                            itemStyle: { color: '#90CAF9' },
                            lineStyle: { color: '#90CAF9', width: 2 } // LÍNEA AZUL
                        },
                        { 
                            name: "raw.flujos\n_residenciales",
                            itemStyle: { color: '#90CAF9' },
                            lineStyle: { color: '#90CAF9', width: 2 }
                        },
                        { 
                            name: "raw.consolidado",
                            itemStyle: { color: '#90CAF9' },
                            lineStyle: { color: '#90CAF9', width: 2 }
                        },
                        { 
                            name: "raw.inmuebles",
                            itemStyle: { color: '#90CAF9' },
                            lineStyle: { color: '#90CAF9', width: 2 }
                        }
                    ]
                },
                // --- RAMA CATALOGOS (VERDE) ---
                {
                    name: "Catálogos\nCSV Excel",
                    itemStyle: { color: '#A5D6A7' }, 
                    emphasis: {
                        itemStyle: { color: '#4CAF50', borderColor: '#fff', borderWidth: 2, shadowBlur: 20, shadowColor: '#4CAF50' },
                        label: { backgroundColor: '#E8F5E9', borderColor: '#4CAF50', borderWidth: 1, color: '#1B5E20', fontWeight: 'bold' }
                    },
                    children: [
                        { 
                            name: "raw.inventario",
                            itemStyle: { color: '#A5D6A7' },
                            lineStyle: { color: '#A5D6A7', width: 2 } // LÍNEA VERDE
                        },
                        { 
                            name: "raw.geo\n_codigo_postal",
                            itemStyle: { color: '#A5D6A7' },
                            lineStyle: { color: '#A5D6A7', width: 2 }
                        },
                        { 
                            name: "raw.geo\n_entidades",
                            itemStyle: { color: '#A5D6A7' },
                            lineStyle: { color: '#A5D6A7', width: 2 }
                        }
                    ]
                }
            ]
        }
    ]
};

// DATOS PARA EL DWH (SANKEY DIAGRAM)
const echartDataDWH = {
    nodes: [
        // --- NIVEL 1: FUENTES ORIGINALES (ENTRADAS) ---
        { name: 'Archivos Auxiliares\n(Excel/CSV)', itemStyle: { color: '#FFCC80', borderColor: '#EF6C00' } }, // Gris Azulado
        
        // --- NIVEL 2: STAGING / CARGA INICIAL ---
        { name: 'Carga: raw.geo_*\nraw.inventario', itemStyle: { color: '#FFF59D', borderColor: '#FBC02D'} }, // Azul Claro
        
        // --- NIVEL 3: DATOS MAESTROS (MAIN RAW) ---
        { name: 'raw.upnify_prospectos', itemStyle: { color: '#CE93D8' } }, // Morado (CRM)
        { name: 'raw.upnify_oportunidades', itemStyle: { color: '#CE93D8' } },
        { name: 'raw.upnify_ventas', itemStyle: { color: '#CE93D8' } },
        { name: 'raw.upnify_productos', itemStyle: { color: '#CE93D8' } },
        { name: 'raw.creditos_as', itemStyle: { color: '#F48FB1' } }, // Rosa (Créditos)
        
        // --- NIVEL 4: DETALLES Y DEPENDENCIAS ---
        { name: 'raw.upnify_seguimientos', itemStyle: { color: '#AB47BC'} }, // Morado oscuro
        { name: 'raw.upnify_prod_oportunidades', itemStyle: { color: '#AB47BC' } },
        { name: 'raw.bitacora_judicial', itemStyle: { color: '#EC407A' } }, // Rosa oscuro
        { name: 'raw.creditos_historica', itemStyle: { color: '#EC407A'} },
        
        // --- NIVEL 5: CONSOLIDACIÓN FINAL (SALIDA) ---
        { name: 'raw.reportes_mora21', itemStyle: { color: '#90CAF9', borderColor: '#1565C0'} } // Azul como la plataforma (Final)
    ],
    links: [
        // Flujo Paso 1 -> Paso 2
        { source: 'Archivos Auxiliares\n(Excel/CSV)', target: 'Carga: raw.geo_*\nraw.inventario', value: 5 },
        
        // Flujo Paso 2 -> Paso 3 (Distribución)
        { source: 'Carga: raw.geo_*\nraw.inventario', target: 'raw.upnify_prospectos', value: 1 },
        { source: 'Carga: raw.geo_*\nraw.inventario', target: 'raw.upnify_oportunidades', value: 1 },
        { source: 'Carga: raw.geo_*\nraw.inventario', target: 'raw.upnify_ventas', value: 1 },
        { source: 'Carga: raw.geo_*\nraw.inventario', target: 'raw.upnify_productos', value: 1 },
        { source: 'Carga: raw.geo_*\nraw.inventario', target: 'raw.creditos_as', value: 2 }, // Valor doble porque alimenta a dos
        
        // Flujo Paso 3 -> Paso 4 (Dependencias CRM)
        { source: 'raw.upnify_prospectos', target: 'raw.upnify_seguimientos', value: 1 },
        { source: 'raw.upnify_oportunidades', target: 'raw.upnify_seguimientos', value: 1 },
        { source: 'raw.upnify_oportunidades', target: 'raw.upnify_prod_oportunidades', value: 1 },
        
        // Flujo Paso 3 -> Paso 4 (Dependencias Crédito)
        { source: 'raw.creditos_as', target: 'raw.bitacora_judicial', value: 1 },
        { source: 'raw.creditos_as', target: 'raw.creditos_historica', value: 1 },
        
        // Flujo Paso 4 -> Paso 5 (Consolidación Final)
        { source: 'raw.bitacora_judicial', target: 'raw.reportes_mora21', value: 1 },
        { source: 'raw.creditos_historica', target: 'raw.reportes_mora21', value: 1 }
    ]
};

// --- 3. DEFINICIÓN DE DIAGRAMAS MERMAID EXISTENTES ---
const mermaidDiagrams = {
    general: `%%{init: {'theme': 'base', 'flowchart': {'nodeSpacing': 60, 'rankSpacing': 60, 'curve': 'basis'}} }%%
        flowchart TB
        classDef glowGreen fill:#C8E6C9,stroke:#66BB6A,stroke-width:1px
        classDef glowYellow fill:#FFF9C4,stroke:#FDD835,stroke-width:1px
        classDef glowBlue fill:#BBDEFB,stroke:#42A5F5,stroke-width:1px

        subgraph SG_Fuente ["FUENTE DE DATOS"]
            direction TB
            FP[("Fuentes Primarias")]:::glowOrange
        end
        
        subgraph SG_Exploracion ["ROL DE EXPLORACIÓN"]
            AD(["Arquitecto de Datos"]):::glowGreen
        end
        
        subgraph SG_Principal ["ROL PRINCIPAL"]
            ID["Ingeniero de Datos"]:::glowYellow
        end
        
        subgraph SG_Plataforma ["PLATAFORMA CENTRAL"]
            DWH[("Raw & Silver<br/>PostgreSQL")]:::glowBlue
        end
        
        subgraph SG_Trabajo ["ROLES DE EXPLORACIÓN"]
            AN(["Analista de Datos"]):::glowGreen
            CD(["Científico de Datos"]):::glowGreen
        end
        
        subgraph STRA ["ROLES DE CONSUMO Y ANÁLISIS "]
            AND(["Analista de datos"]):::glowGreen
            CDD(["Científico de datos"]):::glowGreen
        end

        subgraph SG_Integracion ["ROL DE INTEGRACIÓN"]
            DB["Desarrollador Backend"]:::glowYellow
        end
        
        subgraph SG_Prod_Plat ["PLATAFORMA DE PRODUCCIÓN"]
            APIS[("API de Producción")]
        end
        
        subgraph SG_Prod_Rol ["ROL DE PRODUCCIÓN"]
            DF["Desarrollador Frontend"]:::glowYellow
        end
        
        subgraph SG_Web ["PLATAFORMA WEB"]
            WEB[("Plataforma WEB")]
        end
        
        subgraph SG_Cuentas ["CUENTAS DE SERVICIO"]
            CUENTA(["Cuenta Externa"]):::glowGreen
        end

        subgraph SG_Plataforma 
            NOCRED[("Silver: Créditos<br/>& Reestructuras")]:::glowBlue
        end

        FP --> SA(["Acceso: Auditoría"])
        SA ==> ID
        FP -.-> SP(["Acceso: Sólo Lectura"]) 
        SP ==> SG_Exploracion
        AD -.-> ID 
        ID --> PAU(["Acceso Único: Gestión"]) 
        PAU --> SG_Plataforma
        DWH --> SL(["Acceso: Sólo Lectura"])
        SL --> AN
        SL --> CD 
        SL --> SG_Integracion
        
        AN -.-> SG_Integracion
        CD -.-> SG_Integracion
        
        DB --> SG_Prod_Plat
        APIS --> ACCE(["Acceso: Sólo Lectura (Ver Endpoints)"])
        ACCE --> DF 
        APIS --> ACCESO(["Acceso: Push a feature-branch"])
        ACCESO --> STRA
        
        AND -.-> DF
        CDD -.-> DF
        DF --> SG_Web
        WEB --> WB(["Acceso: Sólo a la WEB"])
        WB --> SG_Cuentas

        style SG_Fuente fill:#FFE0B2,stroke:#FFA726
        style SG_Exploracion fill:#C8E6C9,stroke:#66BB6A
        style SG_Principal fill:#FFF9C4,stroke:#FDD835
        style SG_Plataforma fill:#BBDEFB,stroke:#42A5F5
        style SG_Trabajo fill:#C8E6C9,stroke:#66BB6A
        style STRA fill:#C8E6C9,stroke:#66BB6A
        style SG_Integracion fill:#FFF9C4,stroke:#FDD835
        style SG_Prod_Plat fill:#BBDEFB,stroke:#42A5F5
        style SG_Prod_Rol fill:#FFF9C4,stroke:#FDD835
        style SG_Web fill:#BBDEFB,stroke:#42A5F5
        style SG_Cuentas fill:#C8E6C9,stroke:#66BB6A

        classDef whiteNode fill:#FFFFFF,stroke:#333,stroke-width:1px;
        class FP,AD,ID,DWH,APIS,WEB,AN,CD,AND,CDD,DB,DF,CUENTA whiteNode;
        
        classDef accessNode fill:#FFCCBC,stroke:#E64A19,stroke-width:2px,color:#000000
        class SA,SP,PAU,SL,ACCE,ACCESO,WB accessNode

        style FP fill:#FFFFFF,stroke:#E65100,stroke-width:2px,color:#D84315,font-weight:bold
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
        style APIS fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
        style WEB fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold

        click ID call showDetail("ingeniero") "Ver detalle Ingeniero de Datos"
        click AD call showDetail("arquitecto") "Ver detalle Arquitecto"
        click AN call showDetail("analista") "Ver detalle Analista"
        click CD call showDetail("cientifico") "Ver detalle Científico"
        click DB call showDetail("backend") "Ver detalle Backend"
        click DF call showDetail("frontend") "Ver detalle Frontend"
        click AND call showDetail("analist") "Ver detalle Analista"
        click CDD call showDetail("cientifi") "Ver detalle Cientifico"
        click CUENTA call showDetail("cuenta") "Ver detalle Cuenta"
        click DWH call showDetail("base_raw") "Ver detalle Base Raw"
        click FP call showDetail("fuente_prim") "Ver detalle Fuentes Primarias"
        click NOCRED call showDetail("creditos_flow") "Ver detalle NOCRED"
    `,
    ingeniero: `graph LR
        title[Rol: INGENIERO DE DATOS]
        style title fill:#FFF9C4,stroke:none
        User((Ingeniero))
        subgraph FUENTE DE DATOS
            FP[("Fuentes Primarias")]
        end
        subgraph PLATAFORMA CENTRAL
            DWH[("Raw & Silver")]
        end
        subgraph Tareas
            T1[Ingesta de Fuentes]
            T2[Ejecuta Scripts]
            T3[Le da mantenimiento al DWH]
            T4[Define modelos Silver & Golden]
            T5[Ejecuta scripts de consolidación]
        end
        subgraph Permisos ["Permisos"]
            P1[AUDITORIA]
            P2[CREA/ACTUALIZA]
        end
        FP --> Permisos
        P1 & P2 --> User 
        User --> T1 & T2 & T3 & T4 & T5
        T4 -.-> DWH 
        T5 -.-> DWH 
        style User fill:#FFF9C4,stroke:#FBC02D
        style FP fill:#FFFFFF,stroke:#E65100,stroke-width:2px,color:#D84315,font-weight:bold
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    arquitecto: `graph LR
        title[Rol: ARQUITECTO DE DATOS]
        style title fill:#C8E6C9,stroke:none
        User((Arquitecto))
        subgraph FUENTE DE DATOS
            FP[("Fuentes Primarias")]
        end
        subgraph Tareas
            T1[Feedback Estructura]
            T2[Exploración]
            T3[Audita y propone mejoras al Ingeniero de datos]
            T4[Sugiere reglas de negocio para Silver]
        end
        subgraph Permisos ["Permisos Generales"]
            P1[VISTA DE METADATA]
            P2[NO TIENE ACCESO DE ESCRITURA]
        end
        subgraph PLATAFORMA CENTRAL
            DWH[("Raw & Silver")]
        end
        FP --> P1
        Permisos --> User
        User --> T1 & T2 & T3 & T4
        T4 -.-> DWH
        style User fill:#C8E6C9,stroke:#43A047
        style FP fill:#FFFFFF,stroke:#E65100,stroke-width:2px,color:#D84315,font-weight:bold
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    analista: `graph LR
        title[Rol: ANALISTA DE DATOS]
        style title fill:#C8E6C9,stroke:none
        User((Analista))
        subgraph PLATAFORMA CENTRAL
            DWH[("Raw & Silver")]
        end
        subgraph Tareas
            T1[Realiza reportes de la base Silver]
            T2[Diseña y crea Dashboards]
            T3[Elabora análisis de KPI]
            T4[Prueba y valida las variables y métricas del SQL]
            T5[Realiza sugerencias al Desarrollador Backend]
        end
        subgraph Permisos ["Permisos DWH"]
            P1[SÓLO LECTURA/VISUALIZACIÓN]
        end
        DWH --> P1
        P1 --> User 
        User --> T1 & T2 & T3 & T4 & T5
        style User fill:#C8E6C9,stroke:#43A047
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    cientifico: `graph LR
        title[Rol: CIENTÍFICO DE DATOS]
        style title fill:#C8E6C9,stroke:none
        User((Científico))
        subgraph PLATAFORMA CENTRAL
            DWH[("Raw & Silver")]
        end
        subgraph Tareas
            T1[Prueba algoritmos]
            T2[Realiza modelado de datos]
            T3[Diseña experimentos-A/B Testing]
            T4[Valida métricas clave de negocio]
            T5[Feedback al Desarrollador Backend]
        end
        subgraph Permisos ["Permisos DWH"]
            P1[SOLO LECTURA/VISUALIZACIÓN]
        end
        DWH --> P1
        P1 --> User
        User --> T1 & T2 & T3 & T4 & T5
        style User fill:#C8E6C9,stroke:#43A047
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    backend: `graph LR
        title[Rol: DESARROLLADOR BACKEND]
        style title fill:#FFF9C4,stroke:none
        User((Backend Dev))
        subgraph SG_PLATAFORMA ["PLATAFORMA CENTRAL"]
            DWH[("Raw & Silver")]
        end
        subgraph Permiso ["Permisos"]
            P1[SÓLO LECTURA]
        end 
        subgraph Tareas_Silver ["Tareas"]
            T1[Configura y Crea]
        end
        subgraph PLATAFORMA DE PRODUCCIÓN 
            APIS[("API de Producción")]
        end
        subgraph Tareas API
            Y1[Crear Endpoints]
            Y2[Implenta Tokens]
            Y3[Mantiene y monitorea la API]
            Y4[Estandariza salidas]
            Y5[Gestiona diferentes entornos]
        end
        subgraph Permisos ["Permisos"]
            J1[PUSH A MAIN]
        end
        DWH --> Permiso
        P1 --> User
        User --> T1 
        T1 --> APIS
        APIS --> Permisos
        J1 --> Y1 & Y2 & Y3 
        J1 --> Y4 & Y5
        style User fill:#FFF9C4,stroke:#FBC02D
        style DWH fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
        style APIS fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    frontend: `graph LR
        title[Rol: DESARROLLADOR FRONTEND]
        style title fill:#FFF9C4,stroke:none
        User((Frontend Dev))
        subgraph PLATAFORMA DE PRODUCCIÓN 
            APIS[("API de Producción")]
        end
        subgraph Permiso ["Permisos"]
            P1[SÓLO LECTURA: VER ENDPOINTS]
        end
        subgraph Tarea
            T1[Revisa la documentación de la API]
            T2[Conecta los componentes de la UI]
            T3[Construye UI]
        end
        subgraph SG_Web ["PLATAFORMA WEB"]
            WEB[("Plataforma WEB")]
        end
        subgraph Permisos ["Permisos"]
            J1[CONSUME & GESTIONA]
        end
        subgraph Tareas ["Tareas"]
            Y1[Desarrolla tableros en React/Dash]
            Y2[Publica en la plataforma]
        end
        APIS --> P1
        P1 --> User 
        User --> T1 & T2 & T3
        T3 -.-> WEB
        WEB --> J1
        J1 --> Y1 & Y2
        style User fill:#FFF9C4,stroke:#FBC02D
        style APIS fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
        style WEB fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    analist: `graph LR
        title[Rol: Analista de datos]
        style title fill:#FFF9C4,stroke:none
        User((Analista))
        subgraph PLATAFORMA DE PRODUCCIÓN 
            APIS[("API de Producción")]
        end
        subgraph Permiso ["Permisos"]
            P1["PUSH A FEATURE-BRANCH"]
        end
        subgraph Tareas
            T1[Revisa que los endpoints sean consistentes]
            T2[Genera reportes preeliminares]
            T3[Verifica que los endpoints sean lógicos y fáciles de entender para otros consumidores]
            T4[Propone la creación o modificación de APIs al Backend]
        end
        APIS --> P1
        P1 --> User
        User --> T1 & T2 & T3 & T4
        style User fill:#C8E6C9,stroke:#43A047
        style APIS fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    cientifi: `graph LR
        title[Rol: Científico de datos]
        style title fill:#FFF9C4,stroke:none
        User((Cientifico))
        subgraph PLATAFORMA DE PRODUCCIÓN 
            APIS[("API de Producción")]
        end
        subgraph Permiso ["Permisos"]
            P1["PUSH A FEATURE-BRANCH"]
        end
        subgraph Tareas
            T1[Realiza simulaciones con las versiones piloto]
            T2[Prueba las APIs para medir la latencia al solicitar grandes volúmenes de datos]
            T3[Genera modelos de similitud y evaluación]
            T4[Feedback detallado al Desarrollador Backend]
        end
        APIS --> P1
        P1 --> User
        User --> T1 & T2 & T3 & T4
        style User fill:#C8E6C9,stroke:#43A047
        style APIS fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    cuenta:  `graph LR
        title[Rol: Cuenta Externa]
        style title fill:#FFF9C4,stroke:none
        User((Cuenta))
        subgraph SG_Web ["PLATAFORMA WEB"]
            WEB[("Plataforma WEB")]
        end
        subgraph Permiso ["Permisos"]
            P1["SÓLO LECTURA"]
        end
        subgraph Tareas
            T1[Visualiza la plataforma WEB]
            T2[Realiza comentarios a los desarrolladores]
            T3[Utiliza la plataforma para consumo propio]
        end
        WEB --> P1
        P1 --> User 
        User --> T1 & T2 & T3
        style User fill:#C8E6C9,stroke:#43A047
        style WEB fill:#FFFFFF,stroke:#1565C0,stroke-width:2px,color:#0D47A1,font-weight:bold
    `,
    base_raw: `%%{init: {
        'theme': 'base', 
        'flowchart': {
            'nodeSpacing': 40, 
            'rankSpacing': 70, 
            'curve': 'basis', 
            'padding': 50 }
    } }%%
        flowchart TD
        title[Fuente: Plataforma Central]
        style title fill:#FFF9C4,stroke:none
        classDef groupBase opacity:1
        classDef groupCredito opacity:1
        classDef groupCRM opacity:1
        
        subgraph P1 ["Paso 1: Inicialización"]
            direction TB
            A[("Archivos Auxiliares<br/>(Excel/CSV)")]:::groupBase
            B[("Carga: raw.geo_*<br/>raw.inventario")]:::groupBase
        end
        subgraph P2 ["Paso 2: Ingesta de Datos Maestros"]
            direction TB
            C1[("raw.creditos_as")]:::groupCredito
            C2[("raw.upnify_prospectos")]:::groupCRM
            C3[("raw.upnify_oportunidades")]:::groupCRM
            C4[("raw.upnify_ventas")]:::groupCRM
            C5[("raw.upnify_productos")]:::groupCRM
        end
        subgraph P3 ["Paso 3: Dependencias del crédito"]
            direction TB
            D1[("raw.bitacora_judicial")]:::groupCredito
            D2[("raw.creditos_historica")]:::groupCredito
        end
        subgraph P4 ["Paso 4: Detalle CRM"]
            direction TB
            E1[("raw.upnify_seguimientos")]:::groupCRM
            E2[("raw.upnify_prod_oportunidades")]:::groupCRM
        end
        subgraph P5 ["Paso 5: Reconstrucción Histórica"]
            direction TB
            F[("raw.reportes_mora21")]:::groupCredito
        end
        A --> B
        B --> C1
        B --> C2 & C3 & C4 & C5
        C1 --> D1
        C1 --> D2
        C2 --> E1
        C3 --> E1 & E2
        D1 & D2 --> F

        classDef neutral fill:#FFFFFF,stroke:#B0BEC5,stroke-width:1px,color:#37474F
        class A,B,C1,C2,C3,C4,C5,D1,D2,E1,E2,F neutral

        style P1 fill:#F5F7F8,stroke:#CFD8DC,stroke-width:2px,stroke-dasharray: 5 5,rx:5,ry:5
        style P2 fill:#E0F7FA,stroke:#80DEEA,stroke-width:2px,stroke-dasharray: 5 5,rx:5,ry:5
        style P3 fill:#E8EAF6,stroke:#9FA8DA,stroke-width:2px,stroke-dasharray: 5 5,rx:5,ry:5
        style P4 fill:#FFF3E0,stroke:#FFCC80,stroke-width:2px,stroke-dasharray: 5 5,rx:5,ry:5
        style P5 fill:#F1F8E9,stroke:#C5E1A5,stroke-width:2px,stroke-dasharray: 5 5,rx:5,ry:5
    `,
};
// DATOS PARA EL FLUJO DE CRÉDITOS (SANKEY ORDENADO)
const echartDataCreditos = {
    nodes: [
        // --- NIVEL 1: FUENTES FINANCIERAS (CORE) - NARANJA ---
        { name: 'Adamantine Suite', itemStyle: { color: '#EF6C00' } },
        { name: 'CISHF (Histórico)', itemStyle: { color: '#EF6C00' } },
        { name: 'Reportes Cobranza\n(Scotias/Bursas)', itemStyle: { color: '#FF9800' } },

        // --- NIVEL 1.5: TABLA INTERMEDIA HISTÓRICA (El paso previo) ---
        { name: 'Credit.Creditos\nCarteraHistorica', itemStyle: { color: '#FFF59D', borderColor: '#FBC02D' } }, // Amarillo

        // --- NIVEL 2: FUENTES INFORMATIVAS (AUDITORÍA) - VERDE/GRIS ---
        { name: 'Upnify CRM', itemStyle: { color: '#7E57C2' } }, // Morado
        { name: 'Digyto / Folios', itemStyle: { color: '#7E57C2' } },

        // --- NIVEL 2: FUENTES REESTRUCTURAS - ROSA ---
        { name: 'Entradas Raw\nReestructuras', itemStyle: { color: '#EC407A' } },

        // --- NIVEL 3: DESTINOS SILVER - AZUL ---
        { 
            name: 'silver.nocred_completo\n(LA VERDAD)', 
            itemStyle: { color: '#1565C0', borderColor: '#0D47A1' } // Azul Fuerte
        },
        { 
            name: 'silver.nocred\n(Auditoría)', 
            itemStyle: { color: '#90CAF9', borderColor: '#448AFF' } // Azul Claro
        },
        { 
            name: 'silver.reestructuras\n_procesadas', 
            itemStyle: { color: '#0277BD' } // Azul Intermedio
        }
    ],
    links: [
        // --- FLUJO PRINCIPAL (CARRIL SUPERIOR) ---
        // Las fuentes alimentan a la histórica primero (concepto lógico)
        { source: 'Adamantine Suite', target: 'Credit.Creditos\nCarteraHistorica', value: 4 },
        { source: 'CISHF (Histórico)', target: 'Credit.Creditos\nCarteraHistorica', value: 3 },
        { source: 'Reportes Cobranza\n(Scotias/Bursas)', target: 'Credit.Creditos\nCarteraHistorica', value: 2 },
        
        // De la histórica sale la Silver Completa
        { source: 'Credit.Creditos\nCarteraHistorica', target: 'silver.nocred_completo\n(LA VERDAD)', value: 9 },

        // --- FLUJO DE AUDITORÍA (CARRIL INFERIOR) ---
        // Estas fuentes van directo a la tabla de auditoría
        { source: 'Upnify CRM', target: 'silver.nocred\n(Auditoría)', value: 2 },
        { source: 'Digyto / Folios', target: 'silver.nocred\n(Auditoría)', value: 2 },
        // Adamantine también alimenta auditoría para cruzar datos
        { source: 'Adamantine Suite', target: 'silver.nocred\n(Auditoría)', value: 1 },

        // --- FLUJO DE REESTRUCTURAS (DERIVADO) ---
        // Las raw de reestructuras alimentan su tabla
        { source: 'Entradas Raw\nReestructuras', target: 'silver.reestructuras\n_procesadas', value: 3 },
        // La tabla completa alimenta contexto a las reestructuras
        { source: 'silver.nocred_completo\n(LA VERDAD)', target: 'silver.reestructuras\n_procesadas', value: 3 }
    ]
};