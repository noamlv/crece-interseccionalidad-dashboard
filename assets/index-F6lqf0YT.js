(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={metadata:{source_file:`BD test MyE 19.06.26.xlsx`,sheet:`Respuestas de formulario 1`,n:72,cut_date:`2026-06-19`,generated_on:`2026-06-19`,privacy:`El tablero publica datos agregados. No incluye teléfonos, correos, documentos ni filas individuales.`,quality_notes:[`La base oficial contiene 72 códigos únicos y 20 variables.`,`La edad se calculó con fecha de corte 2026-06-19, porque la base no incluye marca temporal de respuesta.`,`La base solo permite analizar vulneración de derechos como variable general; no contiene detalle por tipo específico de violencia o discriminación.`,`Las respuestas 'Prefiero no responder' se conservan como categoría válida y no se imputan.`]},cards:[{label:`Factores analizados`,value:8,detail:`para el índice de barreras acumuladas`},{label:`Mujeres en su diversidad y otras diversidades`,value:59,detail:`81.9% del total`},{label:`Personas trans`,value:26,detail:`36.1% del total`},{label:`Migración internacional`,value:16,detail:`22.2% del total`},{label:`Vulneración de derechos`,value:37,detail:`reportada en los últimos 12 meses`},{label:`4+ factores`,value:16,detail:`alta acumulación de barreras`}],distributions:{genero:[{categoria:`Mujer`,n:50,pct:69.4},{categoria:`Hombre`,n:13,pct:18.1},{categoria:`No binarie`,n:9,pct:12.5}],trans:[{categoria:`Sí`,n:26,pct:36.1},{categoria:`No`,n:41,pct:56.9},{categoria:`Prefiero no responder`,n:5,pct:6.9}],orientacion:[{categoria:`Heterosexual`,n:38,pct:52.8},{categoria:`Gay`,n:14,pct:19.4},{categoria:`Bisexual`,n:9,pct:12.5},{categoria:`Prefiero no responder`,n:7,pct:9.7},{categoria:`Pansexual`,n:3,pct:4.2},{categoria:`Lesbiana`,n:1,pct:1.4}],nacionalidad:[{categoria:`Perú`,n:56,pct:77.8},{categoria:`Venezuela`,n:14,pct:19.4},{categoria:`BOLIVIA`,n:1,pct:1.4},{categoria:`Bolivia`,n:1,pct:1.4}],situacion_migratoria:[{categoria:`Sin dato`,n:56,pct:77.8},{categoria:`Regular, tengo Carnet de Extranjería -CE`,n:16,pct:22.2}],region:[{categoria:`Lima`,n:44,pct:61.1},{categoria:`Callao`,n:15,pct:20.8},{categoria:`Tumbes`,n:13,pct:18.1}],grupo_edad:[{categoria:`18-24`,n:5,pct:6.9},{categoria:`25-34`,n:17,pct:23.6},{categoria:`35-44`,n:22,pct:30.6},{categoria:`45-59`,n:22,pct:30.6},{categoria:`60+`,n:6,pct:8.3}],educacion:[{categoria:`Superior universitario completo`,n:17,pct:23.6},{categoria:`Superior técnico incompleto`,n:12,pct:16.7},{categoria:`Superior técnico completo`,n:11,pct:15.3},{categoria:`Superior universitario incompleto`,n:9,pct:12.5},{categoria:`Posgrado`,n:9,pct:12.5},{categoria:`Secundaria completa`,n:9,pct:12.5},{categoria:`Secundaria incompleta`,n:4,pct:5.6},{categoria:`Primaria incompleta`,n:1,pct:1.4}],trabajo_sexual:[{categoria:`Sí`,n:28,pct:38.9},{categoria:`No`,n:42,pct:58.3},{categoria:`Prefiero no responder`,n:2,pct:2.8}],discapacidad:[{categoria:`Sí`,n:6,pct:8.3},{categoria:`No`,n:62,pct:86.1},{categoria:`Prefiero no responder`,n:4,pct:5.6}],tipo_discapacidad:[{categoria:`fisica o motora`,n:3,pct:4.2},{categoria:`sensorial visual y/o auditiva`,n:2,pct:2.8},{categoria:`mental psíquica comportamiento`,n:1,pct:1.4}],autoidentificacion_racial:[{categoria:`Mestiza/o/x`,n:49,pct:68.1},{categoria:`Afroperuana/o/x`,n:9,pct:12.5},{categoria:`Blanca/o/x`,n:6,pct:8.3},{categoria:`Indígena andina/o/x`,n:5,pct:6.9},{categoria:`Indígena amazónica/o/x`,n:2,pct:2.8},{categoria:`Asiática/o/x`,n:1,pct:1.4}],condicion_salud:[{categoria:`Ninguna`,n:47,pct:65.3},{categoria:`VIH`,n:17,pct:23.6},{categoria:`Prefiero no responder`,n:7,pct:9.7},{categoria:`VIH/TB`,n:1,pct:1.4}],vulneracion_12m:[{categoria:`Sí`,n:37,pct:51.4},{categoria:`No`,n:32,pct:44.4},{categoria:`Prefiero no responder`,n:3,pct:4.2}],nivel_barreras:[{categoria:`0-1 factores`,n:17,pct:23.6},{categoria:`2-3 factores`,n:39,pct:54.2},{categoria:`4+ factores`,n:16,pct:22.2}]},vulnerability:{summary:[{categoria:`Sí`,n:37,pct:51.4},{categoria:`No`,n:32,pct:44.4},{categoria:`Prefiero no responder`,n:3,pct:4.2}],definition:`Respuesta autodeclarada a la pregunta sobre experiencia de vulneración de derechos en los últimos 12 meses.`},barrier_flags:[{factor:`Identidad trans o género diverso`,n:31,pct:43.1},{factor:`Orientación sexual no heterosexual declarada`,n:27,pct:37.5},{factor:`Migración internacional`,n:16,pct:22.2},{factor:`Trabajo sexual declarado`,n:28,pct:38.9},{factor:`Discapacidad declarada`,n:6,pct:8.3},{factor:`VIH o VIH/TB declarado`,n:18,pct:25},{factor:`Vulneración de derechos en 12 meses`,n:37,pct:51.4},{factor:`Educación secundaria o menor`,n:14,pct:19.4}],intersections:[{interseccion:`Mujeres en su diversidad y otras diversidades + vulneración de derechos`,n:35,pct:48.6},{interseccion:`Trans o género diverso + vulneración de derechos`,n:22,pct:30.6},{interseccion:`Trabajo sexual + vulneración de derechos`,n:21,pct:29.2},{interseccion:`Trabajo sexual + 4+ factores`,n:16,pct:22.2},{interseccion:`4+ factores + vulneración de derechos`,n:15,pct:20.8},{interseccion:`Mujeres en su diversidad y otras diversidades + 4+ factores`,n:15,pct:20.8},{interseccion:`Trans o género diverso + 4+ factores`,n:15,pct:20.8},{interseccion:`LGBQ+ + vulneración de derechos`,n:14,pct:19.4},{interseccion:`VIH o VIH/TB + vulneración de derechos`,n:10,pct:13.9},{interseccion:`Migración internacional + vulneración de derechos`,n:4,pct:5.6}],cross:{region:[{categoria:`Lima`,n:44,pct_total:61.1,vulneracion_pct:59.1,barreras_promedio:2.43,alta_acumulacion_pct:25},{categoria:`Callao`,n:15,pct_total:20.8,vulneracion_pct:60,barreras_promedio:3.2,alta_acumulacion_pct:33.3},{categoria:`Tumbes`,n:13,pct_total:18.1,vulneracion_pct:15.4,barreras_promedio:1.69,alta_acumulacion_pct:0}],genero:[{categoria:`Mujer`,n:50,pct_total:69.4,vulneracion_pct:64,barreras_promedio:2.48,alta_acumulacion_pct:26},{categoria:`Hombre`,n:13,pct_total:18.1,vulneracion_pct:15.4,barreras_promedio:2.08,alta_acumulacion_pct:7.7},{categoria:`No binarie`,n:9,pct_total:12.5,vulneracion_pct:33.3,barreras_promedio:2.89,alta_acumulacion_pct:22.2}],trans:[{categoria:`No`,n:41,pct_total:56.9,vulneracion_pct:36.6,barreras_promedio:1.8,alta_acumulacion_pct:4.9},{categoria:`Sí`,n:26,pct_total:36.1,vulneracion_pct:80.8,barreras_promedio:3.58,alta_acumulacion_pct:53.8},{categoria:`Prefiero no responder`,n:5,pct_total:6.9,vulneracion_pct:20,barreras_promedio:2,alta_acumulacion_pct:0}],orientacion:[{categoria:`Heterosexual`,n:38,pct_total:52.8,vulneracion_pct:55.3,barreras_promedio:2.32,alta_acumulacion_pct:23.7},{categoria:`Gay`,n:14,pct_total:19.4,vulneracion_pct:21.4,barreras_promedio:2.86,alta_acumulacion_pct:21.4},{categoria:`Bisexual`,n:9,pct_total:12.5,vulneracion_pct:88.9,barreras_promedio:2.44,alta_acumulacion_pct:22.2},{categoria:`Prefiero no responder`,n:7,pct_total:9.7,vulneracion_pct:28.6,barreras_promedio:2.57,alta_acumulacion_pct:28.6},{categoria:`Pansexual`,n:3,pct_total:4.2,vulneracion_pct:100,barreras_promedio:2.67,alta_acumulacion_pct:0},{categoria:`Lesbiana`,n:1,pct_total:1.4,vulneracion_pct:0,barreras_promedio:1,alta_acumulacion_pct:0}],migrante:[{categoria:`Perú / sin migración registrada`,n:56,pct_total:77.8,vulneracion_pct:58.9,barreras_promedio:2.57,alta_acumulacion_pct:26.8},{categoria:`Migración internacional`,n:16,pct_total:22.2,vulneracion_pct:25,barreras_promedio:2.06,alta_acumulacion_pct:6.2}],trabajo_sexual:[{categoria:`No`,n:42,pct_total:58.3,vulneracion_pct:35.7,barreras_promedio:1.64,alta_acumulacion_pct:0},{categoria:`Sí`,n:28,pct_total:38.9,vulneracion_pct:75,barreras_promedio:3.68,alta_acumulacion_pct:57.1},{categoria:`Prefiero no responder`,n:2,pct_total:2.8,vulneracion_pct:50,barreras_promedio:2.5,alta_acumulacion_pct:0}],discapacidad:[{categoria:`No`,n:62,pct_total:86.1,vulneracion_pct:48.4,barreras_promedio:2.42,alta_acumulacion_pct:21},{categoria:`Sí`,n:6,pct_total:8.3,vulneracion_pct:66.7,barreras_promedio:2.83,alta_acumulacion_pct:33.3},{categoria:`Prefiero no responder`,n:4,pct_total:5.6,vulneracion_pct:75,barreras_promedio:2.5,alta_acumulacion_pct:25}],condicion_salud:[{categoria:`Ninguna`,n:47,pct_total:65.3,vulneracion_pct:48.9,barreras_promedio:1.94,alta_acumulacion_pct:8.5},{categoria:`VIH`,n:17,pct_total:23.6,vulneracion_pct:52.9,barreras_promedio:3.59,alta_acumulacion_pct:52.9},{categoria:`Prefiero no responder`,n:7,pct_total:9.7,vulneracion_pct:57.1,barreras_promedio:3,alta_acumulacion_pct:28.6},{categoria:`VIH/TB`,n:1,pct_total:1.4,vulneracion_pct:100,barreras_promedio:4,alta_acumulacion_pct:100}],vulneracion:[{categoria:`Sí`,n:37,pct_total:51.4,vulneracion_pct:100,barreras_promedio:3.22,alta_acumulacion_pct:40.5},{categoria:`No`,n:32,pct_total:44.4,vulneracion_pct:0,barreras_promedio:1.69,alta_acumulacion_pct:3.1},{categoria:`Prefiero no responder`,n:3,pct_total:4.2,vulneracion_pct:0,barreras_promedio:1.33,alta_acumulacion_pct:0}]}},t=[{key:`genero`,label:`Identidad de género`,note:`Autoidentificación de género registrada en la base oficial.`},{key:`trans`,label:`Identificación trans`,note:`Respuesta autodeclarada a la pregunta sobre identificación trans.`},{key:`orientacion`,label:`Orientación sexual`,note:`Incluye respuestas de no declaración como categoría propia.`},{key:`region`,label:`Región`,note:`Lugar de residencia actual.`},{key:`grupo_edad`,label:`Edad`,note:`Edad calculada desde fecha de nacimiento con corte al 19 de junio de 2026.`},{key:`educacion`,label:`Educación`,note:`Máximo nivel educativo alcanzado.`},{key:`autoidentificacion_racial`,label:`Autoidentificación racial`,note:`Variable de autoidentificación cultural/racial.`},{key:`condicion_salud`,label:`Condición TB/VIH`,note:`Condición declarada en la base oficial.`},{key:`discapacidad`,label:`Discapacidad`,note:`Declaración general de discapacidad.`}],n=[{key:`region`,label:`Región`},{key:`genero`,label:`Género`},{key:`trans`,label:`Identificación trans`},{key:`orientacion`,label:`Orientación sexual`},{key:`migrante`,label:`Migración`},{key:`trabajo_sexual`,label:`Trabajo sexual`},{key:`discapacidad`,label:`Discapacidad`},{key:`condicion_salud`,label:`Condición TB/VIH`}],r=[{key:`perfil`,label:`Perfil`},{key:`intersecciones`,label:`Intersecciones`},{key:`vulneracion`,label:`Vulneración`},{key:`metodologia`,label:`Metodología`}],i={tab:`perfil`,profileKey:`genero`,crossKey:`region`,vulnerabilityKey:`genero`},a=document.querySelector(`#app`);if(!a)throw Error(`No se encontró el contenedor de la aplicación.`);var o=a;function s(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function c(e){return`${e.toFixed(1)}%`}function l(t){return e.distributions[t]??[]}function u(e){return[...e].sort((e,t)=>t.n-e.n)}function d(t){return e.barrier_flags.find(e=>e.factor===t)}function f(){return`
    <section class="kpi-grid" aria-label="Indicadores principales">
      ${e.cards.map((e,t)=>`
        <article class="kpi-card tone-${t%6+1}">
          <span>${s(e.label)}</span>
          <strong>${s(e.value)}</strong>
          <small>${s(e.detail)}</small>
        </article>
      `).join(``)}
    </section>
  `}function p(){return`
    <nav class="tabs" aria-label="Secciones">
      ${r.map(e=>`
        <button class="tab ${i.tab===e.key?`active`:``}" data-tab="${e.key}" type="button">
          ${s(e.label)}
        </button>
      `).join(``)}
    </nav>
  `}function m(e,t,n){return`
    <select id="${e}" class="select">
      ${t.map(e=>`<option value="${e.key}" ${e.key===n?`selected`:``}>${s(e.label)}</option>`).join(``)}
    </select>
  `}function h(e,t=`categoria`){let n=u(e).filter(e=>e.n>0),r=Math.max(...n.map(e=>e.pct),1);return`
    <div class="bar-list">
      ${n.map(e=>`
        <div class="bar-row">
          <div class="bar-label">
            <span>${s(e.categoria)}</span>
            <b>${e.n}</b>
          </div>
          <div class="bar-track" aria-label="${s(t)} ${s(e.categoria)}: ${c(e.pct)}">
            <div class="bar-fill" style="width:${e.pct/r*100}%"></div>
          </div>
          <span class="bar-value">${c(e.pct)}</span>
        </div>
      `).join(``)}
    </div>
  `}function g(e){let t=Math.max(...e.map(e=>e.pct),1);return`
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
  `}function _(){let e=l(`nivel_barreras`),t=[`#3f8f88`,`#d19b45`,`#b95c6b`],n=0,r=e.map((e,r)=>{let i=n+e.pct,a=`${t[r]} ${n}% ${i}%`;return n=i,a}).join(`, `),i=e.find(e=>e.categoria===`4+ factores`);return`
    <div class="donut-wrap">
      <div class="donut" style="background: conic-gradient(${r});">
        <div>
          <strong>${i?c(i.pct):`0.0%`}</strong>
          <span>4+ factores</span>
        </div>
      </div>
      <div class="legend">
        ${e.map((e,n)=>`
          <span><i style="background:${t[n]}"></i>${s(e.categoria)}: ${e.n} (${c(e.pct)})</span>
        `).join(``)}
      </div>
    </div>
  `}function v(){let e=t.find(e=>e.key===i.profileKey)??t[0],n=d(`Vulneración de derechos en 12 meses`),r=d(`Trabajo sexual declarado`),a=d(`VIH o VIH/TB declarado`),o=d(`Migración internacional`);return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Perfil sociodemográfico</p>
        <h2>Distribuciones de la base oficial</h2>
      </div>
      ${m(`profile-select`,t,i.profileKey)}
    </section>
    <div class="profile-stack">
      <article class="panel profile-main">
        <div class="panel-title">
          <h3>${s(e.label)}</h3>
          <p>${s(e.note)}</p>
        </div>
        ${h(l(e.key))}
      </article>
      <article class="panel accent-panel">
        <div class="panel-title">
          <h3>Alcance</h3>
          <p>La muestra concentra liderazgos comunitarios con presencia de mujeres en su diversidad y otras diversidades de género, población LGBQ+, personas migrantes, personas vinculadas al trabajo sexual y personas que viven con VIH o VIH/TB.</p>
        </div>
        <div class="fact-stack">
          <span><b>${c(l(`region`).find(e=>e.categoria===`Lima`)?.pct??0)}</b> reside en Lima</span>
          <span><b>${n?c(n.pct):`0.0%`}</b> reportó vulneración de derechos en 12 meses</span>
          <span><b>${r?c(r.pct):`0.0%`}</b> declaró trabajo sexual</span>
          <span><b>${a?c(a.pct):`0.0%`}</b> vive con VIH o VIH/TB</span>
          <span><b>${o?c(o.pct):`0.0%`}</b> registra migración internacional</span>
        </div>
      </article>
    </div>
  `}function y(){return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Interseccionalidad</p>
        <h2>Cruces dinámicos e índice acumulado</h2>
      </div>
      ${m(`cross-select`,n,i.crossKey)}
    </section>
    <article class="panel">
      <div class="panel-title">
        <h3>Cruce seleccionado</h3>
        <p>Compara, por dimensión, la vulneración de derechos reportada y la acumulación alta de barreras.</p>
      </div>
      ${b(e.cross[i.crossKey]??[])}
    </article>
    <div class="two-column equal">
      <article class="panel">
        <div class="panel-title">
          <h3>Índice de barreras acumuladas</h3>
          <p>Suma ocho marcadores observados en la base oficial; orienta lectura programática agregada.</p>
        </div>
        ${_()}
      </article>
      <article class="panel">
        <div class="panel-title">
          <h3>Factores considerados</h3>
          <p>Porcentaje sobre el total de respuestas válidas.</p>
        </div>
        ${g(e.barrier_flags)}
      </article>
    </div>
    <article class="panel">
      <div class="panel-title">
        <h3>Combinaciones agregadas</h3>
        <p>Principales cruces construidos con variables disponibles en la base oficial.</p>
      </div>
      ${x(e.intersections)}
    </article>
  `}function b(e){return`
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>n</th>
            <th>% del total</th>
            <th>Vulneración</th>
            <th>4+ factores</th>
          </tr>
        </thead>
        <tbody>
          ${u(e).map(e=>`
            <tr>
              <td>${s(e.categoria)}</td>
              <td>${e.n}</td>
              <td>${c(e.pct_total)}</td>
              <td><span class="mini-bar"><i style="width:${e.vulneracion_pct}%"></i></span>${c(e.vulneracion_pct)}</td>
              <td><span class="mini-bar coral"><i style="width:${e.alta_acumulacion_pct}%"></i></span>${c(e.alta_acumulacion_pct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}function x(e){let t=Math.max(...e.map(e=>e.pct),1);return`
    <ol class="rank-list">
      ${e.slice(0,10).map(e=>`
        <li>
          <span>${s(e.interseccion)}</span>
          <b>${e.n}</b>
          <i style="width:${e.pct/t*100}%"></i>
        </li>
      `).join(``)}
    </ol>
  `}function S(){let t=n.find(e=>e.key===i.vulnerabilityKey)??n[1];return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Vulneración de derechos</p>
        <h2>Reporte general en los últimos 12 meses</h2>
      </div>
      ${m(`vulnerability-select`,n,i.vulnerabilityKey)}
    </section>
    <div class="two-column">
      <article class="panel">
        <div class="panel-title">
          <h3>Respuesta general</h3>
          <p>${s(e.vulnerability.definition)}</p>
        </div>
        ${h(e.vulnerability.summary,`vulneración`)}
      </article>
      <article class="panel">
        <div class="panel-title">
          <h3>Lectura por ${s(t.label.toLowerCase())}</h3>
          <p>La base no incluye detalle por tipo específico de violencia o discriminación.</p>
        </div>
        ${C(e.cross[i.vulnerabilityKey]??[])}
      </article>
    </div>
  `}function C(e){return`
    <div class="table-wrap compact-table">
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>n</th>
            <th>Vulneración</th>
          </tr>
        </thead>
        <tbody>
          ${u(e).map(e=>`
            <tr>
              <td>${s(e.categoria)}</td>
              <td>${e.n}</td>
              <td><span class="mini-bar"><i style="width:${e.vulneracion_pct}%"></i></span>${c(e.vulneracion_pct)}</td>
            </tr>
          `).join(``)}
        </tbody>
      </table>
    </div>
  `}function w(){return`
    <section class="section-head">
      <div>
        <p class="eyebrow">Metodología</p>
        <h2>Fuente, técnicas y límites</h2>
      </div>
    </section>
    <div class="two-column equal">
      <article class="panel prose">
        <h3>Fuente y preparación estadística</h3>
        <p>Base: ${s(e.metadata.source_file)}. Hoja: ${s(e.metadata.sheet)}. Respuestas válidas: ${e.metadata.n}. Fecha de corte para edad: ${s(e.metadata.cut_date)}.</p>
        <p>Se aplicó estadística descriptiva: conteos, porcentajes, distribución por categorías, cruces bivariados y un índice exploratorio de barreras acumuladas calculado solo con variables presentes en la base oficial.</p>
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
        <p>El dashboard se construyó como aplicación estática con Vite, TypeScript, HTML, CSS y visualizaciones SVG/CSS. La publicación se realizó en GitHub Pages desde archivos estáticos, sin backend ni base de datos.</p>
      </article>
      <article class="panel prose">
        <h3>Notas de calidad y cautelas</h3>
        <ul>
          ${e.metadata.quality_notes.map(e=>`<li>${s(e)}</li>`).join(``)}
        </ul>
      </article>
    </div>
  `}function T(){return i.tab===`intersecciones`?y():i.tab===`vulneracion`?S():i.tab===`metodologia`?w():v()}function E(){o.innerHTML=`
    <header class="dashboard-header">
      <div class="header-copy">
        <p class="eyebrow">Proyecto CRECE · Componente 1110</p>
        <h1>Perfil de interseccionalidad de la población beneficiaria</h1>
        <p>Lectura agregada de la base oficial del examen con enfoque de derechos humanos, género e interseccionalidad.</p>
      </div>
      <div class="source-chip">
        <span>${e.metadata.n}</span>
        <small>respuestas válidas</small>
      </div>
    </header>
    ${f()}
    ${p()}
    <main class="content" aria-live="polite">${T()}</main>
    <footer class="site-footer">
      <span>Elaborado por Noam López Villlanes, como parte de su postulación Consultor/a/x en monitoreo, evaluación y apoyo a la implementación del proyecto CRECE.</span>
      <span>19 de junio de 2026.</span>
    </footer>
  `,document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{i.tab=e.dataset.tab,E()})}),document.querySelector(`#profile-select`)?.addEventListener(`change`,e=>{i.profileKey=e.target.value,E()}),document.querySelector(`#cross-select`)?.addEventListener(`change`,e=>{i.crossKey=e.target.value,E()}),document.querySelector(`#vulnerability-select`)?.addEventListener(`change`,e=>{i.vulnerabilityKey=e.target.value,E()})}E();