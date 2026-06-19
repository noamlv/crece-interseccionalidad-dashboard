(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={metadata:{source_file:`Encuesta de perfil sociodemográfico - examen MyE 19.06.26.xlsx`,sheet:`Respuestas de formulario 1`,n:72,survey_start:`2026-04-21`,survey_end:`2026-06-12`,generated_on:`2026-06-19`,privacy:`Dashboard basado en agregados; se excluyen nombres, documentos, teléfonos, correos y códigos únicos.`,quality_notes:[`Las variables de discriminación específica solo están completas para quienes respondieron Sí a la pregunta general de violencia/discriminación.`]},cards:[{label:`Factores analizados`,value:8,detail:`para el índice de barreras acumuladas`},{label:`Mujeres y diversidades de género`,value:59,detail:`81.9% del total`},{label:`Persona trans declarada`,value:26,detail:`36.1%`},{label:`Reportó discriminación/violencia`,value:37,detail:`51.4% últimos 12 meses`},{label:`Nació fuera del Perú`,value:16,detail:`22.2%`},{label:`4+ factores de exclusión`,value:16,detail:`22.2% con acumulación alta`}],distributions:{genero:[{categoria:`Mujer`,n:49,pct:68.1},{categoria:`Hombre`,n:13,pct:18.1},{categoria:`No binarie`,n:9,pct:12.5},{categoria:`Mujer trans`,n:1,pct:1.4}],trans:[{categoria:`Sí`,n:26,pct:36.1},{categoria:`No`,n:41,pct:56.9},{categoria:`Prefiere no responder`,n:5,pct:6.9}],orientacion:[{categoria:`Heterosexual`,n:38,pct:52.8},{categoria:`Gay`,n:14,pct:19.4},{categoria:`Bisexual`,n:9,pct:12.5},{categoria:`Prefiero no responder`,n:7,pct:9.7},{categoria:`Pansexual`,n:3,pct:4.2},{categoria:`Lesbiana`,n:1,pct:1.4}],pais:[{categoria:`Perú`,n:56,pct:77.8},{categoria:`Venezuela`,n:14,pct:19.4},{categoria:`Bolivia`,n:2,pct:2.8}],region:[{categoria:`Lima`,n:44,pct:61.1},{categoria:`Callao`,n:15,pct:20.8},{categoria:`Tumbes`,n:13,pct:18.1}],grupo_edad:[{categoria:`<18`,n:0,pct:0},{categoria:`18-24`,n:5,pct:6.9},{categoria:`25-29`,n:10,pct:13.9},{categoria:`30-39`,n:20,pct:27.8},{categoria:`40-49`,n:19,pct:26.4},{categoria:`50-59`,n:11,pct:15.3},{categoria:`60+`,n:7,pct:9.7},{categoria:`Sin dato`,n:0,pct:0}],educacion:[{categoria:`Superior universitario completo`,n:17,pct:23.6},{categoria:`Superior técnico incompleto`,n:12,pct:16.7},{categoria:`Superior técnico completo`,n:11,pct:15.3},{categoria:`Superior universitario incompleto`,n:9,pct:12.5},{categoria:`Posgrado`,n:9,pct:12.5},{categoria:`Secundaria completa`,n:9,pct:12.5},{categoria:`Secundaria incompleta`,n:4,pct:5.6},{categoria:`Primaria incompleta`,n:1,pct:1.4}],trabajo_sexual:[{categoria:`Sí`,n:28,pct:38.9},{categoria:`No`,n:42,pct:58.3},{categoria:`Prefiere no responder`,n:2,pct:2.8}],discapacidad:[{categoria:`Sí`,n:6,pct:8.3},{categoria:`No`,n:62,pct:86.1},{categoria:`Prefiere no responder`,n:4,pct:5.6}],autoidentificacion_cultural:[{categoria:`Mestiza/o/x`,n:49,pct:68.1},{categoria:`Afroperuana/o/x`,n:9,pct:12.5},{categoria:`Blanca/o/x`,n:6,pct:8.3},{categoria:`Indígena andina/o/x`,n:5,pct:6.9},{categoria:`Indígena amazónica/o/x`,n:2,pct:2.8},{categoria:`Asiática/o/x`,n:1,pct:1.4}],condicion_salud:[{categoria:`Ninguna`,n:47,pct:65.3},{categoria:`VIH`,n:17,pct:23.6},{categoria:`Prefiero no responder`,n:7,pct:9.7},{categoria:`VIH/TB`,n:1,pct:1.4}],violencia_12m:[{categoria:`Sí`,n:37,pct:51.4},{categoria:`No`,n:32,pct:44.4},{categoria:`Prefiere no responder`,n:3,pct:4.2}],nivel_barreras:[{categoria:`0-1 factores`,n:17,pct:23.6},{categoria:`2-3 factores`,n:39,pct:54.2},{categoria:`4+ factores`,n:16,pct:22.2}]},violence_items:[{tipo:`Violencia psicológica`,n:27,pct_total:37.5,pct_respondieron_detalle:73},{tipo:`Discriminación por identidad género`,n:26,pct_total:36.1,pct_respondieron_detalle:70.3},{tipo:`Discriminación en uso de espacios públicos`,n:24,pct_total:33.3,pct_respondieron_detalle:64.9},{tipo:`Acoso sexual en espacios públicos`,n:24,pct_total:33.3,pct_respondieron_detalle:64.9},{tipo:`Violencia institucional`,n:21,pct_total:29.2,pct_respondieron_detalle:56.8},{tipo:`Discriminación por orientación sexual`,n:17,pct_total:23.6,pct_respondieron_detalle:45.9},{tipo:`Tocamientos indebidos`,n:11,pct_total:15.3,pct_respondieron_detalle:29.7},{tipo:`Violencia física`,n:10,pct_total:13.9,pct_respondieron_detalle:27},{tipo:`Robo/hurto sin daños mayores`,n:10,pct_total:13.9,pct_respondieron_detalle:27},{tipo:`Discriminación por ejercer el trabajo sexual`,n:9,pct_total:12.5,pct_respondieron_detalle:24.3},{tipo:`Violencia económica/patrimonial`,n:9,pct_total:12.5,pct_respondieron_detalle:24.3},{tipo:`Discriminación por nacionalidad o estatus migratorio`,n:8,pct_total:11.1,pct_respondieron_detalle:21.6},{tipo:`Violencia sexual (violación sexual)`,n:6,pct_total:8.3,pct_respondieron_detalle:16.2}],barrier_flags:[{factor:`Identidad trans o género diverso`,n:31,pct:43.1},{factor:`Orientación sexual no heterosexual declarada`,n:27,pct:37.5},{factor:`Migración internacional`,n:16,pct:22.2},{factor:`Trabajo sexual declarado`,n:28,pct:38.9},{factor:`Discapacidad declarada`,n:6,pct:8.3},{factor:`VIH o VIH/TB declarado`,n:18,pct:25},{factor:`Discriminación/violencia 12 meses`,n:37,pct:51.4},{factor:`Educación secundaria o menor`,n:14,pct:19.4}],intersections:[{interseccion:`LGBQ+`,n:11,pct:15.3},{interseccion:`Migrante`,n:11,pct:15.3},{interseccion:`Trans/género diverso + Trabajo sexual`,n:9,pct:12.5},{interseccion:`Trans/género diverso + Trabajo sexual + VIH/TB`,n:6,pct:8.3},{interseccion:`Sin marcador priorizado`,n:5,pct:6.9},{interseccion:`LGBQ+ + VIH/TB`,n:5,pct:6.9},{interseccion:`Trans/género diverso`,n:4,pct:5.6},{interseccion:`Trans/género diverso + Trabajo sexual + Discapacidad`,n:2,pct:2.8},{interseccion:`LGBQ+ + Trabajo sexual + VIH/TB`,n:2,pct:2.8},{interseccion:`LGBQ+ + Trabajo sexual`,n:2,pct:2.8},{interseccion:`Trans/género diverso + LGBQ+`,n:2,pct:2.8},{interseccion:`Migrante + Discapacidad`,n:2,pct:2.8}],cross:{region:[{categoria:`Lima`,n:44,violencia_pct:59.1,barreras_promedio:2.43,alta_acumulacion_pct:25},{categoria:`Callao`,n:15,violencia_pct:60,barreras_promedio:3.2,alta_acumulacion_pct:33.3},{categoria:`Tumbes`,n:13,violencia_pct:15.4,barreras_promedio:1.69,alta_acumulacion_pct:0}],genero:[{categoria:`Mujer`,n:49,violencia_pct:63.3,barreras_promedio:2.45,alta_acumulacion_pct:24.5},{categoria:`Hombre`,n:13,violencia_pct:15.4,barreras_promedio:2.08,alta_acumulacion_pct:7.7},{categoria:`No binarie`,n:9,violencia_pct:33.3,barreras_promedio:2.89,alta_acumulacion_pct:22.2},{categoria:`Mujer trans`,n:1,violencia_pct:100,barreras_promedio:4,alta_acumulacion_pct:100}],trans:[{categoria:`No`,n:41,violencia_pct:36.6,barreras_promedio:1.8,alta_acumulacion_pct:4.9},{categoria:`Sí`,n:26,violencia_pct:80.8,barreras_promedio:3.58,alta_acumulacion_pct:53.8},{categoria:`Prefiere no responder`,n:5,violencia_pct:20,barreras_promedio:2,alta_acumulacion_pct:0}],migrante:[{categoria:`Nació en Perú`,n:56,violencia_pct:58.9,barreras_promedio:2.57,alta_acumulacion_pct:26.8},{categoria:`Nació fuera del Perú`,n:16,violencia_pct:25,barreras_promedio:2.06,alta_acumulacion_pct:6.2}],trabajo_sexual:[{categoria:`No`,n:42,violencia_pct:35.7,barreras_promedio:1.64,alta_acumulacion_pct:0},{categoria:`Sí`,n:28,violencia_pct:75,barreras_promedio:3.68,alta_acumulacion_pct:57.1},{categoria:`Prefiere no responder`,n:2,violencia_pct:50,barreras_promedio:2.5,alta_acumulacion_pct:0}],condicion_salud:[{categoria:`Ninguna`,n:47,violencia_pct:48.9,barreras_promedio:1.94,alta_acumulacion_pct:8.5},{categoria:`VIH`,n:17,violencia_pct:52.9,barreras_promedio:3.59,alta_acumulacion_pct:52.9},{categoria:`Prefiero no responder`,n:7,violencia_pct:57.1,barreras_promedio:3,alta_acumulacion_pct:28.6},{categoria:`VIH/TB`,n:1,violencia_pct:100,barreras_promedio:4,alta_acumulacion_pct:100}]}},t=[{key:`genero`,label:`Identidad de género`,note:`Distribución autodeclarada de género.`},{key:`orientacion`,label:`Orientación sexual`,note:`Incluye respuestas de no declaración.`},{key:`region`,label:`Región`,note:`Lugar de residencia actual.`},{key:`grupo_edad`,label:`Edad`,note:`Un registro de edad fue marcado sin dato por inconsistencia.`},{key:`educacion`,label:`Educación`,note:`Máximo nivel educativo alcanzado.`},{key:`autoidentificacion_cultural`,label:`Autoidentificación cultural`,note:`Variable de autoidentificación cultural.`},{key:`condicion_salud`,label:`Condición de salud`,note:`VIH/TB y no respuesta se mantienen agregadas.`}],n=[{key:`region`,label:`Región`},{key:`genero`,label:`Género`},{key:`trans`,label:`Identificación trans`},{key:`migrante`,label:`Migración`},{key:`trabajo_sexual`,label:`Trabajo sexual`},{key:`condicion_salud`,label:`Salud`}],r=[{key:`perfil`,label:`Perfil`},{key:`intersecciones`,label:`Intersecciones`},{key:`violencias`,label:`Violencias`},{key:`metodologia`,label:`Metodología`}],i={tab:`perfil`,profileKey:`genero`,crossKey:`region`},a=document.querySelector(`#app`);if(!a)throw Error(`No se encontró el contenedor de la aplicación.`);var o=a;function s(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function c(e){return`${e.toFixed(1)}%`}function l(t){return e.distributions[t]??[]}function u(e){return[...e].sort((e,t)=>t.n-e.n)}function d(){return`
    <section class="kpi-grid" aria-label="Indicadores principales">
      ${e.cards.map((e,t)=>`
        <article class="kpi-card tone-${t%6+1}">
          <span>${s(e.label)}</span>
          <strong>${s(e.value)}</strong>
          <small>${s(e.detail)}</small>
        </article>
      `).join(``)}
    </section>
  `}function f(){return`
    <nav class="tabs" aria-label="Secciones">
      ${r.map(e=>`
        <button class="tab ${i.tab===e.key?`active`:``}" data-tab="${e.key}" type="button">
          ${s(e.label)}
        </button>
      `).join(``)}
    </nav>
  `}function p(e,t,n){return`
    <select id="${e}" class="select">
      ${t.map(e=>`<option value="${e.key}" ${e.key===n?`selected`:``}>${s(e.label)}</option>`).join(``)}
    </select>
  `}function m(e,t=`categoria`,n=`pct`){let r=u(e).filter(e=>e.n>0),i=Math.max(...r.map(e=>e.pct),1);return`
    <div class="bar-list">
      ${r.map(e=>`
        <div class="bar-row">
          <div class="bar-label">
            <span>${s(e.categoria)}</span>
            <b>${e.n}</b>
          </div>
          <div class="bar-track" aria-label="${s(t)} ${s(e.categoria)}: ${c(e.pct)}">
            <div class="bar-fill" style="width:${e.pct/i*100}%"></div>
          </div>
          <span class="bar-value">${s(n===`pct`?c(e.pct):e.n)}</span>
        </div>
      `).join(``)}
    </div>
  `}function h(e){let t=Math.max(...e.map(e=>e.pct),1);return`
    <div class="bar-list">
      ${e.map(e=>`
        <div class="bar-row factor-row">
          <div class="bar-label wide">
            <span>${s(e.factor)}</span>
            <b>${e.n}</b>
          </div>
          <div class="bar-track amber" aria-label="${s(e.factor)}: ${c(e.pct)}">
            <div class="bar-fill" style="width:${e.pct/t*100}%"></div>
          </div>
          <span class="bar-value">${c(e.pct)}</span>
        </div>
      `).join(``)}
    </div>
  `}function g(){let t=l(`nivel_barreras`),n=[`#3f8f88`,`#d19b45`,`#b95c6b`],r=0;return`
    <div class="donut-wrap">
      <div class="donut" style="background: conic-gradient(${t.map((e,t)=>{let i=r+e.pct,a=`${n[t]} ${r}% ${i}%`;return r=i,a}).join(`, `)});">
        <div>
          <strong>${e.distributions.nivel_barreras.find(e=>e.categoria===`4+ factores`)?.pct.toFixed(1)}%</strong>
          <span>4+ factores</span>
        </div>
      </div>
      <div class="legend">
        ${t.map((e,t)=>`
          <span><i style="background:${n[t]}"></i>${s(e.categoria)}: ${e.n} (${c(e.pct)})</span>
        `).join(``)}
      </div>
    </div>
  `}function _(){let e=t.find(e=>e.key===i.profileKey)??t[0];return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Perfil sociodemográfico</p>
      </div>
      ${p(`profile-select`,t,i.profileKey)}
    </section>
    <div class="profile-stack">
      <article class="panel profile-main">
        <div class="panel-title">
          <h3>${s(e.label)}</h3>
          <p>${s(e.note)}</p>
        </div>
        ${m(l(e.key))}
      </article>
      <article class="panel accent-panel">
        <div class="panel-title">
          <h3>Alcance</h3>
          <p>La muestra concentra liderazgos comunitarios con alta presencia de mujeres, diversidades de género, personas LGBQ+, personas migrantes, personas vinculadas al trabajo sexual y personas que viven con VIH.</p>
        </div>
        <div class="fact-stack">
          <span><b>60.7%</b> reside en Lima</span>
          <span><b>48.8%</b> reportó discriminación o violencia reciente</span>
          <span><b>35.7%</b> declaró intercambio de sexo por dinero</span>
          <span><b>23.8%</b> vive con VIH o VIH/TB</span>
        </div>
      </article>
    </div>
  `}function v(){return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Interseccionalidad</p>
        <h2>Cruces dinámicos y lectura acumulada</h2>
      </div>
      ${p(`cross-select`,n,i.crossKey)}
    </section>
    <article class="panel">
      <div class="panel-title">
        <h3>Cruce seleccionado</h3>
        <p>El filtro de esta sección aplica a esta tabla. Compara, por dimensión, el reporte de violencia y la acumulación alta de barreras.</p>
      </div>
      ${y(e.cross[i.crossKey]??[])}
    </article>
    <section class="section-head static-section-head">
      <div>
        <p class="eyebrow">Lectura estática</p>
        <h2>Indicadores agregados de interseccionalidad</h2>
      </div>
    </section>
    <div class="two-column equal">
      <article class="panel">
        <div class="panel-title">
          <h3>Índice de barreras acumuladas</h3>
          <p>Cuenta ocho factores sociales registrados; no clasifica personas, orienta decisiones programáticas.</p>
        </div>
        ${g()}
      </article>
      <article class="panel">
        <div class="panel-title">
          <h3>Factores más frecuentes</h3>
          <p>Porcentaje sobre el total de respuestas válidas.</p>
        </div>
        ${h(e.barrier_flags)}
      </article>
    </div>
    <article class="panel">
      <div class="panel-title">
        <h3>Combinaciones agregadas</h3>
        <p>Principales perfiles compuestos sin identificación individual.</p>
      </div>
      ${b(e.intersections)}
    </article>
  `}function y(e){return`
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>n</th>
            <th>Violencia</th>
            <th>4+ factores</th>
          </tr>
        </thead>
        <tbody>
          ${u(e).map(e=>`
            <tr>
              <td>${s(e.categoria)}</td>
              <td>${e.n}</td>
              <td><span class="mini-bar"><i style="width:${e.violencia_pct}%"></i></span>${c(e.violencia_pct)}</td>
              <td><span class="mini-bar coral"><i style="width:${e.alta_acumulacion_pct}%"></i></span>${c(e.alta_acumulacion_pct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}function b(e){let t=Math.max(...e.map(e=>e.pct),1);return`
    <ol class="rank-list">
      ${e.slice(0,10).map(e=>`
        <li>
          <span>${s(e.interseccion)}</span>
          <b>${e.n}</b>
          <i style="width:${e.pct/t*100}%"></i>
        </li>
      `).join(``)}
    </ol>
  `}function x(){let t=Math.max(...e.violence_items.map(e=>e.pct_total),1);return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Discriminación y violencia</p>
        <h2>Situaciones reportadas en los últimos 12 meses</h2>
      </div>
    </section>
    <article class="panel">
      <div class="violence-grid">
        ${e.violence_items.map(e=>`
          <div class="violence-item">
            <div>
              <strong>${s(e.tipo)}</strong>
              <span>${e.n} casos · ${c(e.pct_respondieron_detalle)} entre quienes respondieron detalle</span>
            </div>
            <div class="bar-track rose" aria-label="${s(e.tipo)}: ${c(e.pct_total)} del total">
              <div class="bar-fill" style="width:${e.pct_total/t*100}%"></div>
            </div>
            <b>${c(e.pct_total)}</b>
          </div>
        `).join(``)}
      </div>
    </article>
  `}function S(){return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Metodología</p>
        <h2>Fuente, técnicas y herramientas</h2>
      </div>
    </section>
    <div class="two-column equal">
      <article class="panel prose">
        <h3>Fuente y preparación estadística</h3>
        <p>Base: ${s(e.metadata.source_file)}. Hoja: ${s(e.metadata.sheet)}. Respuestas válidas: ${e.metadata.n}. Periodo de registro: ${s(e.metadata.survey_start)} a ${s(e.metadata.survey_end)}.</p>
        <p>Se aplicó estadística descriptiva: conteos, porcentajes, distribución por categorías, cruces bivariados y un índice exploratorio de barreras acumuladas. La edad se calculó desde fecha de nacimiento y fecha de respuesta, excluyendo valores inconsistentes.</p>
      </article>
      <article class="panel prose">
        <h3>Herramientas de análisis</h3>
        <p>El procesamiento estadístico se realizó en Python con pandas y numpy. Los datos del dashboard se exportaron como JSON agregado para evitar publicar microdatos o identificadores personales.</p>
        <p>${s(e.metadata.privacy)}</p>
      </article>
    </div>
    <div class="two-column equal">
      <article class="panel prose">
        <h3>Dashboard y publicación</h3>
        <p>El dashboard se construyó como aplicación estática con Vite, TypeScript, HTML, CSS y visualizaciones SVG/CSS. La publicación se realizó en GitHub Pages desde el repositorio público del proyecto.</p>
      </article>
      <article class="panel prose">
        <h3>Notas de calidad y cautelas</h3>
        <ul>
          ${e.metadata.quality_notes.map(e=>`<li>${s(e)}</li>`).join(``)}
        </ul>
      </article>
    </div>
  `}function C(){return i.tab===`intersecciones`?v():i.tab===`violencias`?x():i.tab===`metodologia`?S():_()}function w(){o.innerHTML=`
    <header class="dashboard-header">
      <div class="header-copy">
        <p class="eyebrow">Proyecto CRECE · Componente 1110</p>
        <h1>Perfil de interseccionalidad de la población beneficiaria</h1>
        <p>Lectura agregada de la encuesta sociodemográfica MIP con enfoque de derechos humanos, género e interseccionalidad.</p>
      </div>
      <div class="source-chip">
        <span>${e.metadata.n}</span>
        <small>respuestas válidas</small>
      </div>
    </header>
    ${d()}
    ${f()}
    <main class="content" aria-live="polite">${C()}</main>
    <footer class="site-footer">
      <span>Elaborado por Noam López Villlanes, como parte de su postulación Consultor/a/x en monitoreo, evaluación y apoyo a la implementación del proyecto CRECE.</span>
      <span>19 de junio de 2026.</span>
    </footer>
  `,document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{i.tab=e.dataset.tab,w()})}),document.querySelector(`#profile-select`)?.addEventListener(`change`,e=>{i.profileKey=e.target.value,w()}),document.querySelector(`#cross-select`)?.addEventListener(`change`,e=>{i.crossKey=e.target.value,w()})}w();