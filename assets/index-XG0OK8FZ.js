(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={metadata:{source_file:`Encuesta de perfil sociodemográfico - MIP (respuestas) (1).xlsx`,sheet:`Respuestas de formulario 1`,n:84,survey_start:`2026-04-21`,survey_end:`2026-06-12`,generated_on:`2026-06-16`,privacy:`Dashboard basado en agregados; se excluyen nombres, documentos, teléfonos, correos y códigos únicos.`,quality_notes:[`La hoja tiene dos filas de encabezado antes de las respuestas.`,`1 registro(s) con fecha de nacimiento posterior a la respuesta fueron excluidos de cálculos de edad.`,`Las variables de discriminación específica solo están completas para quienes respondieron Sí a la pregunta general de violencia/discriminación.`]},cards:[{label:`Respuestas válidas`,value:84,detail:`personas lideresas/representantes de OBC`},{label:`Mujeres y diversidades de género`,value:63,detail:`75.0% del total`},{label:`Persona trans declarada`,value:28,detail:`33.3%`},{label:`Reportó discriminación/violencia`,value:41,detail:`48.8% últimos 12 meses`},{label:`Nació fuera del Perú`,value:17,detail:`20.2%`},{label:`4+ factores de exclusión`,value:19,detail:`22.6% con acumulación alta`}],distributions:{genero:[{categoria:`Mujer`,n:49,pct:58.3},{categoria:`Hombre`,n:21,pct:25},{categoria:`No binarie`,n:10,pct:11.9},{categoria:`Trans`,n:2,pct:2.4},{categoria:`Mujer trans`,n:1,pct:1.2},{categoria:`Simitran`,n:1,pct:1.2}],trans:[{categoria:`Sí`,n:28,pct:33.3},{categoria:`No`,n:51,pct:60.7},{categoria:`Prefiere no responder`,n:5,pct:6}],orientacion:[{categoria:`Heterosexual`,n:45,pct:53.6},{categoria:`Gay`,n:16,pct:19},{categoria:`Bisexual`,n:10,pct:11.9},{categoria:`Prefiero no responder`,n:7,pct:8.3},{categoria:`Pansexual`,n:3,pct:3.6},{categoria:`Asexual`,n:1,pct:1.2},{categoria:`Trans`,n:1,pct:1.2},{categoria:`Lesbiana`,n:1,pct:1.2}],pais:[{categoria:`Perú`,n:67,pct:79.8},{categoria:`Venezuela`,n:15,pct:17.9},{categoria:`Bolivia`,n:2,pct:2.4}],region:[{categoria:`Lima`,n:51,pct:60.7},{categoria:`Callao`,n:18,pct:21.4},{categoria:`Tumbes`,n:14,pct:16.7},{categoria:`Ancash`,n:1,pct:1.2}],grupo_edad:[{categoria:`<18`,n:1,pct:1.2},{categoria:`18-24`,n:6,pct:7.1},{categoria:`25-29`,n:10,pct:11.9},{categoria:`30-39`,n:24,pct:28.6},{categoria:`40-49`,n:22,pct:26.2},{categoria:`50-59`,n:12,pct:14.3},{categoria:`60+`,n:8,pct:9.5},{categoria:`Sin dato`,n:1,pct:1.2}],educacion:[{categoria:`Superior universitario completo`,n:21,pct:25},{categoria:`Superior técnico incompleto`,n:13,pct:15.5},{categoria:`Posgrado`,n:13,pct:15.5},{categoria:`Superior técnico completo`,n:13,pct:15.5},{categoria:`Superior universitario incompleto`,n:10,pct:11.9},{categoria:`Secundaria completa`,n:9,pct:10.7},{categoria:`Secundaria incompleta`,n:4,pct:4.8},{categoria:`Primaria incompleta`,n:1,pct:1.2}],trabajo_sexual:[{categoria:`Sí`,n:30,pct:35.7},{categoria:`No`,n:51,pct:60.7},{categoria:`Prefiere no responder`,n:3,pct:3.6}],discapacidad:[{categoria:`Sí`,n:7,pct:8.3},{categoria:`No`,n:73,pct:86.9},{categoria:`Prefiere no responder`,n:4,pct:4.8}],autoidentificacion_cultural:[{categoria:`Mestiza/o/x`,n:57,pct:67.9},{categoria:`Afroperuana/o/x`,n:10,pct:11.9},{categoria:`Blanca/o/x`,n:8,pct:9.5},{categoria:`Indígena andina/o/x`,n:6,pct:7.1},{categoria:`Indígena amazónica/o/x`,n:2,pct:2.4},{categoria:`Asiática/o/x`,n:1,pct:1.2}],condicion_salud:[{categoria:`Ninguna`,n:56,pct:66.7},{categoria:`VIH`,n:19,pct:22.6},{categoria:`Prefiero no responder`,n:8,pct:9.5},{categoria:`VIH/TB`,n:1,pct:1.2}],violencia_12m:[{categoria:`Sí`,n:41,pct:48.8},{categoria:`No`,n:40,pct:47.6},{categoria:`Prefiere no responder`,n:3,pct:3.6}],nivel_barreras:[{categoria:`0-1 factores`,n:24,pct:28.6},{categoria:`2-3 factores`,n:41,pct:48.8},{categoria:`4+ factores`,n:19,pct:22.6}]},violence_items:[{tipo:`Violencia psicológica`,n:30,pct_total:35.7,pct_respondieron_detalle:73.2},{tipo:`Discriminación por identidad género`,n:28,pct_total:33.3,pct_respondieron_detalle:68.3},{tipo:`Acoso sexual en espacios públicos`,n:27,pct_total:32.1,pct_respondieron_detalle:65.9},{tipo:`Discriminación en uso de espacios públicos`,n:25,pct_total:29.8,pct_respondieron_detalle:61},{tipo:`Violencia institucional`,n:22,pct_total:26.2,pct_respondieron_detalle:53.7},{tipo:`Discriminación por orientación sexual`,n:19,pct_total:22.6,pct_respondieron_detalle:46.3},{tipo:`Tocamientos indebidos`,n:11,pct_total:13.1,pct_respondieron_detalle:26.8},{tipo:`Robo/hurto sin daños mayores`,n:11,pct_total:13.1,pct_respondieron_detalle:26.8},{tipo:`Violencia física`,n:10,pct_total:11.9,pct_respondieron_detalle:24.4},{tipo:`Violencia económica/patrimonial`,n:10,pct_total:11.9,pct_respondieron_detalle:24.4},{tipo:`Discriminación por ejercer el trabajo sexual`,n:9,pct_total:10.7,pct_respondieron_detalle:22},{tipo:`Discriminación por nacionalidad o estatus migratorio`,n:8,pct_total:9.5,pct_respondieron_detalle:19.5},{tipo:`Violencia sexual (violación sexual)`,n:6,pct_total:7.1,pct_respondieron_detalle:14.6}],barrier_flags:[{factor:`Identidad trans o género diverso`,n:34,pct:40.5},{factor:`Orientación sexual no heterosexual declarada`,n:32,pct:38.1},{factor:`Migración internacional`,n:17,pct:20.2},{factor:`Trabajo sexual declarado`,n:30,pct:35.7},{factor:`Discapacidad declarada`,n:7,pct:8.3},{factor:`VIH o VIH/TB declarado`,n:20,pct:23.8},{factor:`Discriminación/violencia 12 meses`,n:41,pct:48.8},{factor:`Educación secundaria o menor`,n:14,pct:16.7}],intersections:[{interseccion:`LGBQ+`,n:12,pct:14.3},{interseccion:`Migrante`,n:12,pct:14.3},{interseccion:`Sin marcador priorizado`,n:11,pct:13.1},{interseccion:`Trans/género diverso + Trabajo sexual`,n:9,pct:10.7},{interseccion:`Trans/género diverso + Trabajo sexual + VIH/TB`,n:7,pct:8.3},{interseccion:`LGBQ+ + VIH/TB`,n:5,pct:6},{interseccion:`Trans/género diverso + LGBQ+`,n:4,pct:4.8},{interseccion:`Trans/género diverso`,n:3,pct:3.6},{interseccion:`LGBQ+ + Trabajo sexual + VIH/TB`,n:3,pct:3.6},{interseccion:`Trans/género diverso + LGBQ+ + Trabajo sexual + VIH/TB`,n:2,pct:2.4},{interseccion:`Trans/género diverso + LGBQ+ + Trabajo sexual`,n:2,pct:2.4},{interseccion:`Migrante + Discapacidad`,n:2,pct:2.4}],cross:{region:[{categoria:`Lima`,n:51,violencia_pct:56.9,barreras_promedio:2.29,alta_acumulacion_pct:25.5},{categoria:`Callao`,n:18,violencia_pct:50,barreras_promedio:2.83,alta_acumulacion_pct:27.8},{categoria:`Tumbes`,n:14,violencia_pct:14.3,barreras_promedio:1.64,alta_acumulacion_pct:0},{categoria:`Ancash`,n:1,violencia_pct:100,barreras_promedio:4,alta_acumulacion_pct:100}],genero:[{categoria:`Mujer`,n:49,violencia_pct:61.2,barreras_promedio:2.35,alta_acumulacion_pct:26.5},{categoria:`Hombre`,n:21,violencia_pct:19,barreras_promedio:1.67,alta_acumulacion_pct:4.8},{categoria:`No binarie`,n:10,violencia_pct:40,barreras_promedio:3,alta_acumulacion_pct:30},{categoria:`Trans`,n:2,violencia_pct:50,barreras_promedio:2.5,alta_acumulacion_pct:0},{categoria:`Mujer trans`,n:1,violencia_pct:100,barreras_promedio:4,alta_acumulacion_pct:100},{categoria:`Simitran`,n:1,violencia_pct:100,barreras_promedio:6,alta_acumulacion_pct:100}],trans:[{categoria:`No`,n:51,violencia_pct:33.3,barreras_promedio:1.65,alta_acumulacion_pct:5.9},{categoria:`Sí`,n:28,violencia_pct:82.1,barreras_promedio:3.61,alta_acumulacion_pct:57.1},{categoria:`Prefiere no responder`,n:5,violencia_pct:20,barreras_promedio:2,alta_acumulacion_pct:0}],migrante:[{categoria:`Nació en Perú`,n:67,violencia_pct:55.2,barreras_promedio:2.4,alta_acumulacion_pct:26.9},{categoria:`Nació fuera del Perú`,n:17,violencia_pct:23.5,barreras_promedio:2,alta_acumulacion_pct:5.9}],trabajo_sexual:[{categoria:`No`,n:51,violencia_pct:33.3,barreras_promedio:1.49,alta_acumulacion_pct:2},{categoria:`Sí`,n:30,violencia_pct:73.3,barreras_promedio:3.67,alta_acumulacion_pct:56.7},{categoria:`Prefiere no responder`,n:3,violencia_pct:66.7,barreras_promedio:3,alta_acumulacion_pct:33.3}],condicion_salud:[{categoria:`Ninguna`,n:56,violencia_pct:44.6,barreras_promedio:1.73,alta_acumulacion_pct:7.1},{categoria:`VIH`,n:19,violencia_pct:52.6,barreras_promedio:3.58,alta_acumulacion_pct:52.6},{categoria:`Prefiero no responder`,n:8,violencia_pct:62.5,barreras_promedio:3.25,alta_acumulacion_pct:50},{categoria:`VIH/TB`,n:1,violencia_pct:100,barreras_promedio:4,alta_acumulacion_pct:100}]}},t=[{key:`genero`,label:`Identidad de género`,note:`Distribución autodeclarada de género.`},{key:`orientacion`,label:`Orientación sexual`,note:`Incluye respuestas de no declaración.`},{key:`region`,label:`Región`,note:`Lugar de residencia actual.`},{key:`grupo_edad`,label:`Edad`,note:`Un registro de edad fue marcado sin dato por inconsistencia.`},{key:`educacion`,label:`Educación`,note:`Máximo nivel educativo alcanzado.`},{key:`autoidentificacion_cultural`,label:`Autoidentificación cultural`,note:`Variable de autoidentificación cultural.`},{key:`condicion_salud`,label:`Condición de salud`,note:`VIH/TB y no respuesta se mantienen agregadas.`}],n=[{key:`region`,label:`Región`},{key:`genero`,label:`Género`},{key:`trans`,label:`Identificación trans`},{key:`migrante`,label:`Migración`},{key:`trabajo_sexual`,label:`Trabajo sexual`},{key:`condicion_salud`,label:`Salud`}],r=[{key:`perfil`,label:`Perfil`},{key:`intersecciones`,label:`Intersecciones`},{key:`violencias`,label:`Violencias`},{key:`metodologia`,label:`Metodología`}],i={tab:`perfil`,profileKey:`genero`,crossKey:`region`},a=document.querySelector(`#app`);if(!a)throw Error(`No se encontró el contenedor de la aplicación.`);var o=a;function s(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function c(e){return`${e.toFixed(1)}%`}function l(t){return e.distributions[t]??[]}function u(e){return[...e].sort((e,t)=>t.n-e.n)}function d(){return`
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
        <div class="bar-row">
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
        <h2>Distribuciones clave</h2>
      </div>
      ${p(`profile-select`,t,i.profileKey)}
    </section>
    <div class="two-column">
      <article class="panel">
        <div class="panel-title">
          <h3>${s(e.label)}</h3>
          <p>${s(e.note)}</p>
        </div>
        ${m(l(e.key))}
      </article>
      <article class="panel accent-panel">
        <div class="panel-title">
          <h3>Lectura de alcance</h3>
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
        <h2>Acumulación de barreras y combinaciones</h2>
      </div>
      ${p(`cross-select`,n,i.crossKey)}
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
    <div class="two-column">
      <article class="panel">
        <div class="panel-title">
          <h3>Cruce seleccionado</h3>
          <p>Comparación agregada por ${s(n.find(e=>e.key===i.crossKey)?.label??`dimensión`)}.</p>
        </div>
        ${y(e.cross[i.crossKey]??[])}
      </article>
      <article class="panel">
        <div class="panel-title">
          <h3>Combinaciones agregadas</h3>
          <p>Principales perfiles compuestos sin identificación individual.</p>
        </div>
        ${b(e.intersections)}
      </article>
    </div>
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
        <h2>Fuente, privacidad y cautelas de lectura</h2>
      </div>
    </section>
    <div class="two-column">
      <article class="panel prose">
        <h3>Fuente</h3>
        <p>Base: ${s(e.metadata.source_file)}. Hoja: ${s(e.metadata.sheet)}. Respuestas válidas: ${e.metadata.n}. Periodo de registro: ${s(e.metadata.survey_start)} a ${s(e.metadata.survey_end)}.</p>
        <p>${s(e.metadata.privacy)}</p>
      </article>
      <article class="panel prose">
        <h3>Notas de calidad</h3>
        <ul>
          ${e.metadata.quality_notes.map(e=>`<li>${s(e)}</li>`).join(``)}
        </ul>
      </article>
    </div>
    <article class="method-band">
      <h3>Lectura recomendada</h3>
      <p>El índice de barreras acumuladas es exploratorio: suma marcadores sociales observados para orientar monitoreo y acompañamiento. No debe usarse para etiquetar personas ni para restringir acceso a servicios.</p>
    </article>
  `}function C(){return i.tab===`intersecciones`?v():i.tab===`violencias`?x():i.tab===`metodologia`?S():_()}function w(){o.innerHTML=`
    <header class="dashboard-header">
      <div class="header-copy">
        <p class="eyebrow">Proyecto CRECE · Componente 1110</p>
        <h1>Perfil de interseccionalidad de la población alcanzada</h1>
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
  `,document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{i.tab=e.dataset.tab,w()})}),document.querySelector(`#profile-select`)?.addEventListener(`change`,e=>{i.profileKey=e.target.value,w()}),document.querySelector(`#cross-select`)?.addEventListener(`change`,e=>{i.crossKey=e.target.value,w()})}w();