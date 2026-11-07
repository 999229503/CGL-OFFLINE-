export const estilos = `
*{box-sizing:border-box}html,body,#root{margin:0;width:100%;min-height:100%;}body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#07111f;color:#e7eef8;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;overflow-x:hidden;overflow-y:auto;touch-action:pan-y;-webkit-overflow-scrolling:touch;}button,input,select,textarea{font:inherit}button{cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}input,select,textarea{ -webkit-user-select:text; user-select:text; -webkit-touch-callout:default; }
:root{--bg:#07111f;--panel:#0c1929;--panel2:#101f32;--line:#1b3149;--muted:#8192a8;--text:#eaf2fb;--blue:#2388ff;--cyan:#27c7ff;--green:#22c55e;--purple:#8b5cf6;--orange:#f59e0b;--red:#ef476f;--shadow:0 16px 40px rgba(0,0,0,.22)}
.app{min-height:100vh;min-height:100dvh;display:flex;background:radial-gradient(circle at 75% 0%,rgba(22,119,255,.08),transparent 34%),var(--bg);overflow-x:hidden}
.sidebar{position:fixed;inset:0 auto 0 0;width:246px;background:linear-gradient(180deg,#081525 0%,#07111d 100%);border-right:1px solid #172b42;color:#fff;z-index:40;display:flex;flex-direction:column;padding:22px 14px 16px;box-shadow:12px 0 40px rgba(0,0,0,.18)}
.logo{display:flex;align-items:center;gap:11px;padding:4px 10px 24px;border-bottom:1px solid #172b42}.logoMark{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#1686ff,#2bc7ff);box-shadow:0 0 24px rgba(35,136,255,.35);font-size:22px}
.logoMarkImagem{overflow:hidden!important;padding:0!important;background:#ffffff!important;border:1px solid #e2ebf4!important;border-radius:12px!important;box-shadow:0 5px 18px rgba(36,59,83,.10)!important}
.logoMarkImagem img{width:100%;height:100%;display:block;object-fit:contain;border-radius:10px;background:#fff}
.logo h1{margin:0;font-size:20px;letter-spacing:-.4px}.logo span{display:block;color:#71849a;font-size:10px;margin-top:2px}.nav{display:flex;flex-direction:column;gap:6px;padding-top:18px;overflow:auto}.nav button{height:45px;width:100%;border:1px solid transparent;background:transparent;color:#8ea1b7;border-radius:11px;display:flex;align-items:center;gap:12px;padding:0 12px;font-size:13px;text-align:left;transition:.2s}.nav button:hover{background:#0d1e31;color:#eaf2fb}.nav button.active{background:linear-gradient(90deg,rgba(31,132,255,.22),rgba(31,132,255,.08));border-color:#155ea8;color:#fff;box-shadow:inset 3px 0 0 #2388ff}.navIcon{width:20px;height:20px;display:grid;place-items:center;color:currentColor}.navLabel{white-space:nowrap}.sidebarFooter{margin-top:auto;border-top:1px solid #172b42;padding:15px 8px 0;display:flex;align-items:center;gap:10px}.avatar{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#1e88ff,#7c3aed);font-size:12px;font-weight:800}.sidebarFooter strong{font-size:12px}.sidebarFooter span{display:block;color:#71849a;font-size:10px;margin-top:2px}
.main{margin-left:246px;width:calc(100% - 246px);min-height:100vh;padding:18px 28px 42px;max-width:none}.topbar{height:48px;display:flex;align-items:center;gap:12px;margin:0 auto 18px;max-width:1420px}.searchBox{height:38px;flex:1;max-width:410px;border:1px solid #203750;background:#0c1929;border-radius:10px;color:#8ca0b6;display:flex;align-items:center;padding:0 13px;font-size:12px}.searchBox input{border:0;outline:0;background:transparent;color:#dce9f5;width:100%;height:100%;font:inherit;padding:0 8px}.searchBox input::placeholder{color:#71869b}.photoActions{display:flex;gap:8px;flex-wrap:wrap}.photoActions button{white-space:nowrap}.topSpacer{flex:1}.topDate{font-size:11px;color:#8da0b5}.bell{width:34px;height:34px;border:1px solid #203750;background:#0c1929;color:#b7c7d8;border-radius:10px}.onlineDot{color:#38d77b;font-size:11px;font-weight:700}.syncText{color:#73879e;font-size:11px}.userEmail{color:#91a3b7;font-size:11px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.logoutBtn{border:1px solid #203750;background:#0c1929;color:#9db0c4;border-radius:9px;padding:7px 10px;font-size:11px}
header{display:flex;justify-content:space-between;align-items:center;gap:15px;margin:0 auto 18px;max-width:1420px}header h1{margin:0;font-size:25px;letter-spacing:-.6px;color:#f1f6fb;line-height:1.15}header span{color:#70849a;font-size:11px}header .primary{flex-shrink:0;white-space:nowrap}
.primary,.secondary,.danger,.close,.cancel{border-radius:9px;padding:10px 14px;font-weight:700;border:1px solid transparent;transition:.18s}.primary{background:linear-gradient(135deg,#187eff,#22a8ff);color:#fff;box-shadow:0 8px 24px rgba(35,136,255,.18)}.primary:hover{filter:brightness(1.08);transform:translateY(-1px)}.secondary{background:#102237;color:#a9c0d8;border-color:#1f3a55}.secondary:hover{border-color:#2b608c;color:#fff}.danger{background:rgba(239,71,111,.1);color:#ff8da8;border-color:rgba(239,71,111,.22);padding:9px 12px}.danger:hover{background:rgba(239,71,111,.17)}.close{width:38px;height:38px;padding:0;font-size:25px;background:#132338;color:#b9c8d8}.cancel{background:#132338;color:#aabbd0;border-color:#203950}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:14px}.card{background:linear-gradient(145deg,#0e1d30,#0b1727);border:1px solid #1b334b;border-radius:13px;padding:16px;display:flex;gap:13px;align-items:center;box-shadow:var(--shadow);transition:.2s;text-align:left;width:100%;color:var(--text)}.card.clickable{cursor:pointer}.card.clickable:hover{transform:translateY(-2px);border-color:#285b83}.cardIcon{width:40px;height:40px;border-radius:11px;display:grid;place-items:center;font-size:18px;flex-shrink:0;background:#102b47;color:#48a9ff;border:1px solid #1c4b70}.cardInfo{display:flex;flex-direction:column;gap:3px;min-width:0}.cardInfo span{color:#7f93a9;font-size:11px}.cardInfo strong{font-size:18px;color:#eef5fb;line-height:1.15}
.dashboardGrid{grid-template-columns:repeat(4,minmax(0,1fr));}.dashboardSecondaryGrid{display:none}.dashboardCard:nth-child(2) .cardIcon{background:#0d3027;color:#38d98a;border-color:#195d48}.dashboardCard:nth-child(3) .cardIcon{background:#24183d;color:#b58aff;border-color:#50358a}.dashboardCard:nth-child(4) .cardIcon{background:#3a2a12;color:#ffb13b;border-color:#76521e}.dashboardCard:nth-child(5) .cardIcon{background:#102b47}.dashboardCard:nth-child(6) .cardIcon{background:#3b1b27;color:#ff7895;border-color:#6c2d40}
.panel{background:linear-gradient(145deg,#0c1929,#0a1726);border:1px solid #1a3148;border-radius:14px;padding:18px;margin:0 auto 14px;max-width:1420px;box-shadow:var(--shadow)}.panelHeader{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-bottom:16px}.panelHeader h2{margin:0 0 4px;font-size:16px;color:#e9f1f8}.panelHeader p{margin:0;color:#72869c;font-size:11px}.cardsList{display:flex;flex-direction:column;gap:11px}.obrasPastas{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:14px}.obraPasta{overflow:hidden;border:1px solid #1b334b;background:#0d1b2d;border-radius:14px;box-shadow:var(--shadow);transition:.2s}.obraPasta:hover{border-color:#285b83;transform:translateY(-1px)}.obraPastaCapa{position:relative;display:block;width:100%;height:145px;padding:0;border:0;border-bottom:1px solid #1b334b;background:#091725;color:#fff;text-align:left;overflow:hidden;cursor:pointer}.obraPastaCapa img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}.obraPastaSemFoto{position:absolute;inset:0;display:grid;place-items:center;font-size:38px;background:radial-gradient(circle at 50% 35%,#173653,#091725 72%)}.obraPastaCapaSombra{position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,11,19,.08) 15%,rgba(3,11,19,.25) 42%,rgba(3,11,19,.94) 100%)}.obraPastaCapaNome{position:absolute;left:14px;right:14px;bottom:12px;display:flex;flex-direction:column;gap:3px}.obraPastaCapaNome strong{font-size:17px;color:#f1f6fb;line-height:1.15;text-shadow:0 2px 8px rgba(0,0,0,.45)}.obraPastaCapaNome span{font-size:11px;color:#65caff;font-weight:800}.obraPastaCorpo{padding:11px 13px 13px}.obraPastaAcoes{display:flex;gap:7px;flex-wrap:wrap}.obraPastaAcoes .primary{flex:1;min-width:130px}.obraPastaAcoes .status{min-width:125px}.itemCard{border:1px solid #1b334b;background:#0d1b2d;border-radius:12px;padding:15px;display:flex;justify-content:space-between;gap:20px;align-items:center}.itemCard h3{margin:0 0 7px;font-size:14px}.itemCard p{margin:3px 0;color:#7f93a8;font-size:11px}.itemCard strong{display:block;margin-top:7px;font-size:14px}.actions{display:flex;align-items:center;gap:7px;flex-wrap:wrap}.empty{padding:42px 15px;text-align:center;color:#74879d;display:flex;flex-direction:column;gap:7px}.emptyIcon{font-size:34px}.progress{width:100%;height:8px;background:#15273a;border-radius:20px;overflow:hidden}.progressBar{height:100%;background:linear-gradient(90deg,#1788ff,#2bd1ff);border-radius:20px;transition:width .3s;box-shadow:0 0 14px rgba(35,174,255,.35)}.progressInfo{display:flex;justify-content:flex-end;margin-bottom:5px;color:#35c5ff;font-size:11px}.obraProgress{margin-top:12px;padding-top:12px;border-top:1px solid #1a3046}.etapasResumo{margin-top:12px}.etapaResumo{margin-bottom:9px}.etapaResumoHeader{display:flex;justify-content:space-between;font-size:11px;margin-bottom:4px;color:#8fa1b4}.etapaResumoHeader strong{color:#39baff}.equipeResumo{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.pessoaTag{background:#132941;color:#77bfff;border:1px solid #20496b;border-radius:20px;padding:5px 9px;font-size:10px;font-weight:700}.obraBotoes{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}
/* dashboard visual */
.dashboardHero{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(260px,.85fr);gap:14px;margin-bottom:14px}.projectCard{position:relative;overflow:hidden;min-height:220px;border:1px solid #1c3953;border-radius:14px;background:#0b1a2b}.projectImage{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.48}.projectShade{position:absolute;inset:0;background:linear-gradient(90deg,#071422 3%,rgba(7,20,34,.92) 38%,rgba(7,20,34,.38) 100%)}.projectContent{position:relative;z-index:1;padding:20px;height:100%;display:flex;flex-direction:column;justify-content:flex-end}.projectContent h3{font-size:18px;margin:0 0 5px}.projectContent p{margin:2px 0;color:#91a5ba;font-size:11px}.projectMiniProgress{width:46%;min-width:170px;height:5px;background:#163047;border-radius:999px;overflow:hidden;margin-top:10px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.025)}.projectMiniProgressBar{height:100%;border-radius:999px;background:linear-gradient(90deg,#18d9ff,#2388ff);box-shadow:0 0 12px rgba(35,174,255,.55);transition:width .35s ease}.projectMainProgressRow{display:flex;align-items:center;gap:10px;margin-top:7px}.projectMainProgress{flex:1;height:8px;background:#15273a;border-radius:999px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.025)}.projectMainProgressBar{height:100%;border-radius:999px;background:linear-gradient(90deg,#16d9d9,#20bfff,#237dff);box-shadow:0 0 14px rgba(35,174,255,.38);transition:width .35s ease}.projectProgressPercent{font-size:13px;font-weight:900;color:#edf7ff;min-width:38px;text-align:right}.projectMeta{display:flex;gap:24px;margin-top:13px}.projectMeta span{display:block;color:#70869d;font-size:9px;text-transform:uppercase;letter-spacing:.5px}.projectMeta strong{display:block;color:#e9f2fa;font-size:12px;margin-top:2px}.projectStatus{display:inline-flex;align-items:center;width:max-content;padding:5px 8px;border-radius:999px;background:rgba(34,197,94,.13);border:1px solid rgba(34,197,94,.25);color:#53dc86;font-size:10px;font-weight:800;margin-bottom:10px}.dashboardProgress{border:1px solid #1c3953;border-radius:14px;background:#0b1a2b;padding:20px;display:flex;align-items:center;justify-content:center;gap:18px}.donut{width:118px;height:118px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(#27c7ff calc(var(--p)*1%),#152a3e 0);position:relative;box-shadow:0 0 28px rgba(39,199,255,.12)}.donut:after{content:"";width:82px;height:82px;border-radius:50%;background:#0b1a2b;position:absolute}.donut span{position:relative;z-index:1;font-size:24px;font-weight:800;color:#eef7ff}.legend{display:flex;flex-direction:column;gap:10px}.legendRow{display:flex;align-items:center;gap:7px;color:#91a5ba;font-size:10px}.dot{width:7px;height:7px;border-radius:50%}.dot.blue{background:#27c7ff}.dot.green{background:#35d989}.dot.orange{background:#ff9f43}.dashboardBottom{display:grid;grid-template-columns:1fr 1fr;gap:14px}.chartBars{height:150px;display:flex;align-items:flex-end;gap:14px;padding:14px 6px 2px}.barCol{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}.bar{width:100%;max-width:38px;border-radius:6px 6px 2px 2px;background:linear-gradient(180deg,#2ab9ff,#176fd8);min-height:6px;box-shadow:0 0 14px rgba(39,199,255,.12)}.barLabel{font-size:9px;color:#70859b}.barValue{font-size:9px;color:#9db0c2}.activityList{display:flex;flex-direction:column}.activity{display:flex;gap:10px;padding:10px 0;border-bottom:1px solid #172d43}.activity:last-child{border-bottom:0}.activityIcon{width:28px;height:28px;border-radius:9px;background:#112a42;display:grid;place-items:center;color:#5cbcff;font-size:12px;flex-shrink:0}.activity strong{display:block;font-size:11px;color:#dbe7f2}.activity span{display:block;color:#70859b;font-size:9px;margin-top:2px}
.tarefaProgresso{margin-top:12px;padding-top:11px;border-top:1px solid #1a3046;max-width:520px}.tarefaProgressoHeader{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;color:#8195aa;font-size:10px}.tarefaProgressoHeader strong{color:#35c5ff;font-size:13px}.tarefaControles{display:flex;align-items:center;gap:5px;margin-top:7px;flex-wrap:wrap}.tarefaControles button{border:1px solid #24425d;background:#11253a;color:#9ec0da;border-radius:7px;padding:6px 8px;font-size:10px;font-weight:800}.tarefaControles button:active{transform:scale(.97)}.tarefaControles input{width:58px;height:31px;border:1px solid #2a4863;border-radius:7px;background:#091725;color:#eef7ff;text-align:center;font-size:11px;font-weight:800;outline:none}.tarefaControles input:focus{border-color:#258dff;box-shadow:0 0 0 3px rgba(37,141,255,.11)}.progressDashboard{height:9px;margin:3px 0 4px}.progressDashboardInfo{display:flex;justify-content:space-between;gap:10px;color:#70859b;font-size:9px;margin-top:2px}.progressDashboardInfo strong{color:#35c5ff;font-size:12px}.obraProgressHeader{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;color:#8fa1b4;font-size:11px}.obraProgressHeader strong{color:#35c5ff;font-size:13px}.tableWrap{width:100%;overflow-x:auto;border-radius:10px}table{width:100%;border-collapse:collapse;min-width:650px}th,td{padding:12px 10px;border-bottom:1px solid #172c41;text-align:left;font-size:12px;color:#a9b9ca}th{color:#6f8399;font-size:9px;text-transform:uppercase;letter-spacing:.5px}tr:hover td{background:rgba(24,136,255,.025)}.status{border:0;border-radius:20px;padding:6px 9px;font-size:10px;font-weight:700;background:#17283b;color:#a8b8c9}.status-pendente{background:rgba(245,158,11,.12);color:#ffc261}.status-em-andamento{background:rgba(35,136,255,.12);color:#62b5ff}.status-concluido{background:rgba(34,197,94,.12);color:#5be28c}.pagamentoStatusBtn{border:0;border-radius:999px;padding:8px 13px;font-weight:900;cursor:pointer;transition:transform .15s ease,filter .15s ease;min-width:108px}.pagamentoStatusBtn:hover{filter:brightness(1.08);transform:translateY(-1px)}.pagamentoStatusBtn.pago{background:rgba(34,197,94,.16);color:#5be28c}.pagamentoStatusBtn.pendente{background:rgba(245,158,11,.16);color:#ffc261}
.modalOverlay{position:fixed;inset:0;z-index:100;background:rgba(1,7,14,.78);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:15px;overflow-y:auto}.modal{background:#0c1929;width:min(700px,100%);max-height:94vh;overflow-y:auto;border:1px solid #23425f;border-radius:16px;box-shadow:0 30px 90px rgba(0,0,0,.55)}.modalHeader{padding:18px 20px;border-bottom:1px solid #1c3349;display:flex;justify-content:space-between;align-items:center;gap:15px}.modalHeader h2{margin:0 0 4px;font-size:18px;color:#eef5fb}.modalHeader span{color:#71859a;font-size:11px}.modalBody{padding:20px}.formGrid{display:grid;grid-template-columns:1fr 1fr;gap:13px}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field span{font-size:11px;font-weight:700;color:#a9bacb}.field span b{color:#ff6f8d;margin-left:3px}.field input,.field select{width:100%;border:1px solid #25415b;border-radius:9px;padding:11px;outline:none;background:#0a1726;color:#e7eef8;min-height:43px}.field input::placeholder{color:#52677e}.field input:focus,.field select:focus{border-color:#258dff;box-shadow:0 0 0 3px rgba(37,141,255,.11)}.formActions{display:flex;justify-content:flex-end;gap:9px;margin-top:18px}.sectionTitle{margin:23px 0 11px;font-size:14px;font-weight:800;color:#dce8f3}.etapa{border:1px solid #1d354c;border-radius:11px;padding:12px;margin-bottom:9px;background:#0b1929}.etapaTop{display:flex;justify-content:space-between;align-items:center;gap:10px}.etapaNome{font-weight:700}.etapaPercentual{font-weight:800;color:#2cc6ff}.etapaControls{display:flex;gap:6px;margin-top:9px;flex-wrap:wrap}.etapaControls button{border:1px solid #203b54;background:#12253a;color:#a9bfd2;border-radius:7px;padding:7px 10px;font-weight:800}.etapaControls input{flex:1;min-width:70px;border:1px solid #29445c;border-radius:7px;text-align:center;padding:7px;background:#091725;color:#fff}.obraEtapasEditarBar{display:flex;justify-content:flex-end;margin-top:4px;margin-bottom:8px}.obraEtapasEditarBar .secondary{font-size:11px}.equipeGrid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.funcionarioBox{border:1px solid #1d354c;border-radius:10px;padding:11px;background:#0b1929}.funcionarioBox label{display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer}.equipeFuncionarioNome{display:flex;align-items:center;gap:9px;min-width:0}.equipeFuncionarioNome strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.equipeFuncionarioNumero{min-width:28px;height:28px;padding:0 5px;font-size:11px;border-width:1px}.funcionarioBox input{width:17px;height:17px;accent-color:#2388ff}.funcionarioInfo{margin-top:6px;color:#72869b;font-size:10px}.pix{font-family:monospace;font-size:11px;word-break:break-all}.toolSummary{margin-top:14px;padding:12px;border-radius:10px;background:#0a1726;border:1px solid #1c344b;color:#91a4b7;font-size:11px}.muted{font-size:10px;color:#6f8398;margin-top:3px}.photoTools{display:grid;grid-template-columns:1fr 1fr;gap:11px;align-items:end;margin-bottom:13px}.photoTools input[type=file]{width:100%;padding:9px;border:1px dashed #31506b;border-radius:9px;background:#0a1726;color:#91a4b7}.photoGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px}.photoCard{overflow:hidden;border:1px solid #1c344b;border-radius:11px;background:#0a1726}.photoPreviewButton{display:block;width:100%;padding:0;border:0;background:transparent;border-radius:0;overflow:hidden}.photoCard img{width:100%;height:145px;object-fit:cover;display:block;cursor:zoom-in;transition:transform .2s ease,filter .2s ease}.photoPreviewButton:hover img{transform:scale(1.025);filter:brightness(1.08)}.photoCard>div{padding:9px;display:flex;flex-direction:column;gap:6px}.photoCard small{color:#6f8398}.photoViewer{width:100%;display:flex;flex-direction:column;align-items:center;gap:12px}.photoViewer img{display:block;width:100%;max-height:68vh;object-fit:contain;border-radius:12px;background:#07111f;border:1px solid #1c344b}.photoViewerInfo{width:100%;color:#91a5ba;font-size:11px;text-align:center}.photoViewerInfo strong{display:block;color:#eaf2fb;font-size:13px;margin-bottom:3px}.photoEmpty{padding:18px;border:1px dashed #2a455f;border-radius:10px;color:#71859a;background:#0a1726}.toolUnitTag{display:inline-flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:#102941;color:#7ec4ff;border:1px solid #204967;font-size:10px;font-weight:700}.toolLocationSelect{min-width:170px;border:1px solid #25415b;border-radius:8px;padding:8px 9px;background:#0a1726;color:#dbe7f2}.toolUnitRow td{vertical-align:middle}.toolNameCell{min-width:190px}.toolIdCell{white-space:nowrap;font-weight:700}
.authScreen{min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 50% 0%,rgba(35,136,255,.14),transparent 40%),#06101d}.authCard{width:min(420px,100%);background:#0c1929;border:1px solid #1f3c57;border-radius:20px;padding:30px;box-shadow:0 30px 90px rgba(0,0,0,.45)}.authLogo{width:62px;height:62px;border-radius:17px;display:grid;place-items:center;background:linear-gradient(135deg,#1686ff,#2bc7ff);font-size:28px;margin-bottom:15px;box-shadow:0 0 30px rgba(35,136,255,.25)}.authCard h1{margin:0 0 6px;font-size:25px;color:#eef6ff}.authSubtitle{color:#788da4;margin:0 0 16px;font-size:12px}.authBadge{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(34,197,94,.1);color:#54db88;border:1px solid rgba(34,197,94,.18);font-size:11px;font-weight:700;margin-bottom:16px}.authButton{width:100%;margin-top:8px;min-height:46px}.authError{background:rgba(239,71,111,.1);color:#ff8ca5;border:1px solid rgba(239,71,111,.2);padding:10px 11px;border-radius:9px;margin:9px 0;font-size:12px}.authHint{display:block;color:#687e96;line-height:1.45;margin-top:14px;font-size:10px}.authSpinner{width:25px;height:25px;border:3px solid #1c344b;border-top-color:#2cbcff;border-radius:50%;animation:obracontrolSpin .8s linear infinite;margin-top:16px}@keyframes obracontrolSpin{to{transform:rotate(360deg)}}

.diasSemanaGrid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.semanaPessoaBloco + .semanaPessoaBloco{margin-top:18px;padding-top:4px;border-top:1px solid #dce7f2}.adicionarSemanaPessoa{width:100%;margin-top:14px;padding:12px 16px;background:#eef9ff!important;border:1px solid #bfe4f5!important;color:#147fa8!important;font-weight:800!important;border-radius:11px}.adicionarSemanaPessoa:hover{background:#e1f5ff!important}.diaTrabalho{border:1px solid #24415b;border-radius:11px;background:#0b1929;color:#dbe7f2;padding:11px 7px;display:flex;flex-direction:column;align-items:center;gap:5px;text-align:center;min-height:105px}.diaTrabalho strong{font-size:11px}.diaTrabalho span{font-size:9px;color:#72869b}.diaTrabalho b{font-size:9px}.diaTrabalho.trabalhou{background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.42);color:#71e49a}.diaTrabalho.naoTrabalhou{opacity:.82}.resumoDiarias{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:14px}.resumoDiarias>div{padding:12px;border:1px solid #1d354c;border-radius:10px;background:#0a1726}.resumoDiarias span{display:block;color:#71869c;font-size:9px}.resumoDiarias strong{display:block;color:#eef5fb;font-size:16px;margin-top:4px}.resumoDiarias>div:last-child strong{color:#42d985}
@media(max-width:700px){.funcionarioNumero{min-width:34px;height:34px;padding:0 5px;font-size:12px}.equipeFuncionarioNumero{min-width:26px;height:26px;padding:0 4px;font-size:10px}}@media(max-width:1000px){.sidebar{width:76px;padding:18px 10px}.logo{justify-content:center;padding:4px 0 20px}.logoMark{width:40px}.logoText,.navLabel,.sidebarFooter .userText{display:none}.nav button{justify-content:center;padding:0}.main{margin-left:76px;width:calc(100% - 76px);padding:16px}.dashboardGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.dashboardHero{grid-template-columns:1fr}.dashboardBottom{grid-template-columns:1fr}.topDate,.userEmail{display:none}}
@media(max-width:650px){.progressDashboardInfo{font-size:8px}.progressDashboardInfo strong{font-size:11px}.dashboardProgress{justify-content:flex-start}.sidebar{position:fixed;left:0;right:0;top:auto;bottom:0;width:100%;height:68px;padding:7px 8px;background:#081523;border-right:0;border-top:1px solid #1b334b;box-shadow:0 -12px 35px rgba(0,0,0,.35)}.logo,.sidebarFooter{display:none}.nav{padding:0;display:grid;grid-template-columns:repeat(9,minmax(0,1fr));gap:3px;overflow:hidden;width:100%}.nav button{height:54px;border-radius:9px;padding:0;gap:2px;flex-direction:column;font-size:9px}.navIcon{width:20px;height:20px}.navLabel{display:block;font-size:8px;color:inherit}.nav button.active{box-shadow:inset 0 2px 0 #2388ff}.main{margin-left:0;width:100%;padding:12px 10px 84px}.topbar{margin-bottom:13px;height:42px}.searchBox{max-width:none;height:36px}.bell{width:32px;height:32px}.dashboardGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.card{padding:11px;gap:8px;border-radius:11px}.cardIcon{width:33px;height:33px;border-radius:9px;font-size:15px}.cardInfo span{font-size:9px}.cardInfo strong{font-size:14px}.dashboardHero{gap:9px}.projectCard{min-height:190px}.projectContent{padding:14px}.projectContent h3{font-size:15px}.projectMiniProgress{width:42%;min-width:130px;margin-top:8px}.projectMainProgressRow{gap:8px}.projectMainProgress{height:7px}.projectProgressPercent{font-size:12px;min-width:34px}.projectMeta{gap:15px}.dashboardProgress{padding:15px;gap:14px}.donut{width:92px;height:92px}.donut:after{width:64px;height:64px}.donut span{font-size:18px}.legend{gap:7px}.legendRow{font-size:9px}.dashboardBottom{gap:9px}.chartBars{gap:8px;padding-left:2px;padding-right:2px}.barCol{min-width:0}.barLabel{font-size:8px;text-align:center}.barValue{font-size:8px;text-align:center}.panel{padding:13px;border-radius:11px}.panelHeader h2{font-size:14px}.panelHeader p{font-size:10px}.formGrid{grid-template-columns:1fr}.field.full{grid-column:auto}.itemCard{align-items:flex-start;flex-direction:column}.actions{width:100%}.actions .status{flex:1}.photoTools{grid-template-columns:1fr}.photoGrid{grid-template-columns:1fr 1fr}.photoCard img{height:115px}.obrasPastas{grid-template-columns:1fr}.obraPastaCapa{height:150px}.obraPastaAcoes{gap:6px}.obraPastaAcoes .primary{min-width:0}header{flex-wrap:wrap;gap:7px;margin-bottom:12px}header h1{font-size:21px}header .primary{width:auto}.modalOverlay{align-items:flex-start;padding:8px}.modal{margin-top:3vh}.modalBody{padding:15px}.equipeGrid{grid-template-columns:1fr}}
@media(max-width:390px){.nav button{font-size:8px}.navLabel{font-size:7px}.dashboardGrid{gap:6px}.card{padding:9px}.cardIcon{width:29px;height:29px;font-size:13px}.cardInfo strong{font-size:13px}.main{padding-left:7px;padding-right:7px}}
@media(max-width:700px){
  .photoTools{grid-template-columns:1fr}
  .photoActions{width:100%}
  .photoActions button{flex:1}
  /* Ferramentas: tabela mais compacta no celular, sem alterar a lógica. */
  /* Ferramentas: compacto para TODAS as unidades no celular.
     O desktop permanece exatamente como estava. */
  .toolNameCell{min-width:105px}
  .toolNameCell strong{font-size:10px;white-space:normal;line-height:1.15}
  .toolNameCell .muted{font-size:7.5px;line-height:1.15}
  .toolUnitRow td{padding:7px 5px;font-size:9px;line-height:1.15}
  .toolUnitRow .toolIdCell{min-width:76px}
  .toolUnitTag{padding:3px 6px;font-size:8px;white-space:nowrap}
  .toolLocationSelect{min-width:105px;max-width:125px;padding:5px 6px;font-size:8px}
  .toolUnitRow .actions{gap:4px}
  .toolUnitRow .actions button{padding:5px 6px;font-size:8px}
  .toolUnitRow td:nth-child(2){max-width:105px;word-break:break-word}
  .toolUnitRow td:nth-child(3){max-width:90px}

  /* Obras: centraliza o texto do botão Gerenciar no celular. */
  .obraPastaAcoes .primary{display:flex;align-items:center;justify-content:center;text-align:center;white-space:normal;line-height:1.15}

  /* Materiais, Despesas e Pagamentos: no celular cada registro vira um cartão vertical.
     Os botões de editar/excluir ficam embaixo das informações, como em Funcionários. */
  .tableWrap.mobileFriendlyTable{overflow:visible}
  .mobileFriendlyTable table{min-width:0;width:100%;border-collapse:separate;border-spacing:0 9px}
  .mobileFriendlyTable thead{display:none}
  .mobileFriendlyTable tbody{display:block;width:100%}
  .mobileFriendlyTable tr{display:flex;flex-direction:column;gap:0;border:1px solid #1b334b;border-radius:12px;background:#0d1b2d;overflow:hidden}
  .mobileFriendlyTable td{display:block;width:100%;padding:7px 11px;border:0;font-size:10px;line-height:1.3;word-break:break-word}
  .mobileFriendlyTable td:first-child{padding-top:11px;color:#eef5fb;font-weight:800;font-size:12px}
  .mobileFriendlyTable td:last-child{padding-top:8px;padding-bottom:11px;border-top:1px solid #172c41;margin-top:3px}
  .mobileFriendlyTable .mobileActionButtons{display:flex;gap:7px;width:100%}
  .mobileFriendlyTable .mobileActionButtons button{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;padding:8px 10px}


  /* Ferramentas: somente no celular, transforma cada unidade em um cartão compacto.
     No desktop a tabela continua exatamente como estava. */
  .toolMobileTable{overflow:visible}
  .toolMobileTable table{min-width:0;width:100%;border-collapse:separate;border-spacing:0 8px}
  .toolMobileTable thead{display:none}
  .toolMobileTable tbody{display:block;width:100%}
  .toolMobileTable tr.toolUnitRow{display:flex;flex-direction:column;gap:0;border:1px solid #1b334b;border-radius:11px;background:#0d1b2d;overflow:hidden}
  .toolMobileTable tr.toolUnitRow td{display:flex;align-items:center;width:100%;min-width:0;max-width:none!important;padding:6px 10px;border:0;font-size:9px;line-height:1.2;word-break:break-word}
  .toolMobileTable tr.toolUnitRow td:first-child{padding-top:10px;color:#eef5fb}
  .toolMobileTable .toolNameCell{min-width:0;flex-direction:column;align-items:flex-start;justify-content:flex-start}
  .toolMobileTable .toolNameCell strong{font-size:11px;line-height:1.15}
  .toolMobileTable .toolNameCell .muted{font-size:7.5px;line-height:1.15;margin-top:5px}
  .toolMobileTable tr.toolUnitRow td:nth-child(2)::before{content:"Marca/modelo: ";color:#637b92;font-weight:700;margin-right:3px;flex-shrink:0}
  .toolMobileTable tr.toolUnitRow td:nth-child(3)::before{content:"Quantidade: ";color:#637b92;font-weight:700;margin-right:5px;flex-shrink:0}
  .toolMobileTable tr.toolUnitRow td:nth-child(4)::before{content:"Valor: ";color:#637b92;font-weight:700;margin-right:3px;flex-shrink:0}
  .toolMobileTable tr.toolUnitRow td:nth-child(5){display:flex;align-items:center;gap:6px}
  .toolMobileTable tr.toolUnitRow td:nth-child(5)::before{content:"Local: ";color:#637b92;font-weight:700;flex-shrink:0}
  .toolMobileTable .toolUnitTag{padding:3px 6px;font-size:8px;white-space:nowrap}
  .toolMobileTable .toolLocationSelect{flex:1;min-width:0;max-width:none;width:auto;padding:5px 7px;font-size:8px}
  .toolMobileTable tr.toolUnitRow td:last-child{padding:8px 10px 10px;border-top:1px solid #172c41;margin-top:2px}
  .toolMobileTable tr.toolUnitRow td:last-child .actions{width:100%;gap:6px}
  .toolMobileTable tr.toolUnitRow td:last-child button{flex:1;min-width:0;padding:7px 9px;font-size:9px;display:flex;align-items:center;justify-content:center}
  .obraEtapasEditarBar{justify-content:center;margin-top:10px}
  .obraEtapasEditarBar .secondary{width:100%;justify-content:center;text-align:center}
}

@media(max-width:700px){.diasSemanaGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.diaTrabalho{min-height:90px}.resumoDiarias{grid-template-columns:1fr}.resumoDiarias>div{display:flex;justify-content:space-between;align-items:center}.resumoDiarias strong{margin-top:0}}

/* CGL — fundo claro da área principal */
body{background:#ffffff!important;color:#172033!important}
.app{background:#ffffff!important}
.main{background:#ffffff!important}
.content{background:#ffffff!important}
.topbar{background:#ffffff!important;color:#172033!important;border-bottom:1px solid #e2e8f0!important}
header h1{color:#172033!important}
header span{color:#64748b!important}
.searchBox{background:#ffffff!important;border-color:#cbd5e1!important}
.searchBox input{color:#172033!important}
.searchBox input::placeholder{color:#94a3b8!important}
.bell,.logoutBtn{background:#ffffff!important;color:#334155!important;border-color:#cbd5e1!important}
.panel,.itemCard,.card{background:#ffffff!important;color:#172033!important;border-color:#dbe2ea!important;box-shadow:0 8px 24px rgba(15,23,42,.07)!important}
.panelHeader h2,.itemCard h3,.card h3{color:#172033!important}
.panelHeader p,.itemCard p,.card p{color:#64748b!important}
.field input,.field select,.field textarea{background:#ffffff!important;color:#172033!important;border-color:#cbd5e1!important}
.field span{color:#475569!important}
.tableWrap{background:#ffffff!important}
.tableWrap th{color:#64748b!important}
.tableWrap td{color:#334155!important;border-color:#e2e8f0!important}
tr:hover td{background:#f8fafc!important}
.modal{background:#ffffff!important;color:#172033!important;border-color:#dbe2ea!important}
.modalHeader{border-color:#e2e8f0!important}
.modalHeader h2{color:#172033!important}
.secondary,.cancel,.close{background:#f1f5f9!important;color:#334155!important;border-color:#cbd5e1!important}
.secondary:hover,.cancel:hover,.close:hover{background:#e2e8f0!important}
.diaTrabalho{background:#f8fafc!important;color:#172033!important;border-color:#cbd5e1!important}
.diaTrabalho.trabalhou{background:#ecfdf5!important;border-color:#86efac!important;color:#166534!important}
.diaTrabalho.naoTrabalhou{background:#f8fafc!important;color:#64748b!important}
.resumoDiarias{background:#f8fafc!important;border-color:#dbe2ea!important}
.resumoDiarias span{color:#64748b!important}
.resumoDiarias strong{color:#172033!important}

/* =========================================================
   CGL • PALETA FINAL — MODELO 2 DA REFERÊNCIA
   SOMENTE CORES / ACABAMENTO. ESTRUTURA E LAYOUT PRESERVADOS.
   ========================================================= */
:root{
  --bg:#f5f9fd!important;
  --panel:#ffffff!important;
  --panel2:#f8fbff!important;
  --line:#dce7f2!important;
  --muted:#6d7f93!important;
  --text:#172a3d!important;
  --blue:#1597f5!important;
  --cyan:#2bc7f5!important;
  --green:#27c995!important;
  --purple:#8b63e8!important;
  --orange:#f2a24a!important;
  --red:#ef6680!important;
  --shadow:0 10px 28px rgba(23,42,61,.08)!important;
}

html,body,#root{background:#f5f9fd!important;color:#172a3d!important}
body{background:#f5f9fd!important;color:#172a3d!important}
.app,.main,.content{background:#f5f9fd!important;color:#172a3d!important}

/* Barra lateral — branca como na referência */
.sidebar{
  background:#ffffff!important;
  color:#172a3d!important;
  border-right:1px solid #dce7f2!important;
  box-shadow:8px 0 28px rgba(23,42,61,.07)!important;
}
.logo{border-bottom-color:#e2ebf4!important}
.logoMark{
  background:linear-gradient(135deg,#168ff0,#2bc7f5)!important;
  box-shadow:0 5px 18px rgba(21,151,245,.22)!important;
}
.logo h1{color:#17304a!important}
.logo span,.sidebarFooter span{color:#74869a!important}
.nav button{color:#718399!important}
.nav button:hover{background:#f2f8fd!important;color:#17304a!important}
.nav button.active{
  background:#e5f3ff!important;
  border-color:#c9e7fb!important;
  color:#168fe9!important;
  box-shadow:inset 3px 0 0 #1597f5!important;
}
.sidebarFooter{border-top-color:#e2ebf4!important}
.avatar{background:linear-gradient(135deg,#1597f5,#8b63e8)!important}
.sidebarFooter strong{color:#253b51!important}

/* Cabeçalho */
.topbar{background:#f5f9fd!important;border-color:#dce7f2!important}
header h1{color:#172a3d!important}
header span{color:#708399!important}
.searchBox{
  background:#ffffff!important;
  border-color:#dce7f2!important;
  color:#708399!important;
  box-shadow:0 4px 14px rgba(23,42,61,.05)!important;
}
.searchBox input{color:#172a3d!important}
.searchBox input::placeholder{color:#9aabbb!important}
.bell,.logoutBtn{
  background:#ffffff!important;
  color:#4f6479!important;
  border-color:#dce7f2!important;
}
.onlineDot{color:#27b987!important}
.syncText,.userEmail{color:#718398!important}

/* Ações */
.primary,button.primary{
  background:linear-gradient(135deg,#168ff0,#20b6f2)!important;
  color:#ffffff!important;
  border-color:#1597f5!important;
  box-shadow:0 8px 22px rgba(21,151,245,.18)!important;
}
.primary:hover,button.primary:hover{background:linear-gradient(135deg,#0e83df,#18aeea)!important}
.secondary,.cancel,.close,button.secondary{
  background:#f2f7fb!important;
  color:#40566d!important;
  border-color:#d4e1ec!important;
}
.secondary:hover,.cancel:hover,.close:hover,button.secondary:hover{background:#e7f0f7!important;color:#213b54!important}
.danger,button.danger,.btnDanger,.deleteBtn{
  background:#fff0f3!important;
  color:#d84d6b!important;
  border-color:#f7ccd6!important;
}
.danger:hover,button.danger:hover{background:#ffe5eb!important}
.success,button.success,.btnSuccess{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}
.warning,button.warning,.btnWarning{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}
.info,button.info,.btnInfo{background:#f0eaff!important;color:#7452cf!important;border-color:#ddd0fb!important}

/* Cards e painéis — branco, com borda fria e sombra leve */
.card,.panel,.projectCard,.dashboardProgress,.tableWrap,.itemCard,.obraPasta{
  background:#ffffff!important;
  color:#172a3d!important;
  border-color:#dce7f2!important;
  box-shadow:0 8px 24px rgba(23,42,61,.065)!important;
}
.card:hover,.projectCard:hover,.obraPasta:hover{border-color:#c5dceb!important;box-shadow:0 12px 30px rgba(23,42,61,.09)!important}
.card h2,.card h3,.panel h2,.panel h3,.panelHeader h2,.itemCard h3{color:#172a3d!important}
.card p,.panel p,.panelHeader p,.itemCard p,.muted{color:#718399!important}
.cardInfo span{color:#718399!important}
.cardInfo strong{color:#172a3d!important}

/* Indicadores do dashboard — pastel como na imagem */
.dashboardCard:nth-child(1) .cardIcon,.dashboardCard:nth-child(5) .cardIcon{
  background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important;
}
.dashboardCard:nth-child(2) .cardIcon{
  background:#e6faf3!important;color:#18a878!important;border-color:#c6efdf!important;
}
.dashboardCard:nth-child(3) .cardIcon{
  background:#f0eaff!important;color:#805bd8!important;border-color:#ded2fa!important;
}
.dashboardCard:nth-child(4) .cardIcon{
  background:#fff3e5!important;color:#e28d32!important;border-color:#f7dfc1!important;
}
.dashboardCard:nth-child(6) .cardIcon{
  background:#fff0f3!important;color:#df5a78!important;border-color:#f5d0d9!important;
}
.cardIcon{border-radius:11px!important}

/* Obras / imagens */
.obraPastaCapa{border-bottom-color:#dce7f2!important;background:#edf5fa!important}
.obraPastaSemFoto{background:radial-gradient(circle at 50% 35%,#d9edf9,#f5f9fd 72%)!important}
.obraPastaCapaSombra{background:linear-gradient(180deg,rgba(10,29,47,.04) 15%,rgba(10,29,47,.16) 42%,rgba(10,29,47,.78) 100%)!important}
.obraPastaCapaNome strong{color:#ffffff!important}
.obraPastaCapaNome span{color:#5ed0aa!important}
.obraPastaCorpo{background:#ffffff!important}
.pessoaTag{background:#e8f5ff!important;color:#188fdc!important;border-color:#cbe7f8!important}

/* Progresso */
.progress{background:#e8f0f6!important}
.progressBar{background:linear-gradient(90deg,#1597f5,#2bc7f5)!important;box-shadow:0 0 12px rgba(43,199,245,.22)!important}
.progressInfo{color:#178fe7!important}
.etapaResumoHeader{color:#708399!important}
.etapaResumoHeader strong{color:#1597f5!important}
.obraProgress{border-top-color:#e3ecf4!important}

/* Tabelas */
table{color:#344b61!important}
th{color:#718399!important;background:#f7fafd!important}
td{color:#344b61!important;border-color:#e5edf4!important}
tr:hover td{background:#f6faff!important}

/* Formulários */
.field span{color:#40566d!important}
.field span b{color:#e35d78!important}
.field input,.field select,.field textarea{
  background:#ffffff!important;
  color:#172a3d!important;
  border-color:#cbdbe8!important;
}
.field input::placeholder,.field textarea::placeholder{color:#9aabbb!important}
.field input:focus,.field select:focus,.field textarea:focus{
  border-color:#75c7f3!important;
  box-shadow:0 0 0 3px rgba(117,199,243,.18)!important;
}

/* Status */
.status-concluido,.concluido{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}
.status-pendente,.pendente{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}
.status-andamento,.emAndamento{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}
.status{border-color:transparent!important}

/* Chips, ferramentas e resumo */
.toolAction,.actionBtn{background:#f5f9fd!important;color:#496078!important;border-color:#dce7f2!important}
.toolAction:hover,.actionBtn:hover{background:#eaf3f9!important}
.resumoDiarias{background:#f7fafd!important;border-color:#dce7f2!important}
.resumoDiarias span{color:#718399!important}
.resumoDiarias strong{color:#172a3d!important}
.diaTrabalho{background:#f7fafd!important;color:#253b51!important;border-color:#cbdbe8!important}
.diaTrabalho.trabalhou{background:#e6faf3!important;border-color:#aee7d4!important;color:#147d5e!important}
.diaTrabalho.naoTrabalhou{background:#f7fafd!important;color:#718399!important}

/* CGL — dias da semana: verde = trabalhou / vermelho = não trabalhou */
.diaTrabalho.trabalhou{
  background:#e6faf3!important;
  border-color:#9edfc8!important;
  color:#147d5e!important;
}
.diaTrabalho.trabalhou strong,
.diaTrabalho.trabalhou b{color:#147d5e!important}
.diaTrabalho.naoTrabalhou{
  background:#fff0f2!important;
  border-color:#f2a7b5!important;
  color:#c9435e!important;
}
.diaTrabalho.naoTrabalhou strong,
.diaTrabalho.naoTrabalhou b{color:#c9435e!important}

/* CGL — Registro de pagamentos em formato de pastinha */
.arquivoPasta{
  width:100%;
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px 18px;
  border:1px solid #dce7f2!important;
  border-radius:14px;
  background:#fff!important;
  color:#243b53!important;
  cursor:pointer;
  text-align:left;
  box-shadow:0 6px 18px rgba(36,59,83,.06);
  transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease;
}
.arquivoPasta:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 24px rgba(36,59,83,.09);
  border-color:#b9d7ea!important;
}
.arquivoPasta.aberta{
  border-bottom-left-radius:8px;
  border-bottom-right-radius:8px;
  border-color:#b9d7ea!important;
}
.pastaIcon{
  width:48px;
  height:42px;
  display:grid;
  place-items:center;
  border-radius:11px;
  background:#fff4cf;
  font-size:27px;
  flex:none;
}
.pastaTexto{
  display:flex;
  flex-direction:column;
  gap:3px;
  min-width:0;
  flex:1;
}
.pastaTexto strong{font-size:16px;color:#243b53!important}
.pastaTexto small{font-size:12px;color:#718399!important}
.pastaSeta{
  font-size:22px;
  color:#1597f5!important;
  line-height:1;
}
.arquivoPastaConteudo{
  margin-top:-1px;
  padding:18px;
  border:1px solid #b9d7ea!important;
  border-top:0!important;
  border-radius:0 0 14px 14px;
  background:#f8fbff!important;
}
.arquivoCabecalho{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-bottom:14px;
}
.arquivoCabecalho>div:first-child{
  display:flex;
  flex-direction:column;
  gap:4px;
}
.arquivoCabecalho span{
  color:#718399!important;
  font-size:12px;
}
@media(max-width:700px){
  .arquivoPasta{padding:14px}
  .pastaIcon{width:44px;height:40px;font-size:24px}
  .arquivoPastaConteudo{padding:13px}
  .arquivoCabecalho{align-items:flex-start}
}

/* Modal */
.modalOverlay{background:rgba(13,31,48,.42)!important}
.modal{background:#ffffff!important;color:#172a3d!important;border-color:#dce7f2!important;box-shadow:0 24px 65px rgba(23,42,61,.18)!important}
.modalHeader{border-color:#e3ecf4!important}
.modalHeader h2{color:#172a3d!important}
.modalHeader span{color:#718399!important}

/* Login — mesma linguagem visual do restante do app */
.authScreen{
  background:
    radial-gradient(circle at 50% 0%,rgba(43,199,245,.15),transparent 34%),
    #f5f9fd!important;
  color:#172a3d!important;
}
.authCard{background:#ffffff!important;color:#172a3d!important;border-color:#dce7f2!important;box-shadow:0 22px 65px rgba(23,42,61,.12)!important}
.authCard h1{color:#172a3d!important}
.authSubtitle,.authHint{color:#718399!important}
.authError{background:#fff0f3!important;color:#d84d6b!important;border-color:#f7ccd6!important}
.authSpinner{border-color:#dce7f2!important;border-top-color:#1597f5!important}
.authButton,.authCard .primary{background:linear-gradient(135deg,#168ff0,#20b6f2)!important;color:#ffffff!important;border-color:#1597f5!important}
.authCard .field input{background:#ffffff!important;color:#172a3d!important;border-color:#cbdbe8!important}
.authCard .field span{color:#40566d!important}
.authBadge{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}

/* Gráficos / legendas */
.legendRow{color:#5f7489!important}
.legendRow b{color:#344b61!important}
.dot.blue{background:#1597f5!important}
.dot.green{background:#27c995!important}
.dot.orange{background:#f2a24a!important}
.bar{background:linear-gradient(180deg,#69b7df,#69b7df)!important}.chartBars .barCol:nth-child(1) .bar{background:linear-gradient(180deg,#69b7df,#3fa7d8)!important;box-shadow:0 0 14px rgba(63,167,216,.22)!important}.chartBars .barCol:nth-child(2) .bar{background:linear-gradient(180deg,#69c7a8,#4fb894)!important;box-shadow:0 0 14px rgba(79,184,148,.22)!important}.chartBars .barCol:nth-child(3) .bar{background:linear-gradient(180deg,#a78bd4,#8f70c5)!important;box-shadow:0 0 14px rgba(143,112,197,.20)!important}.chartBars .barCol:nth-child(4) .bar{background:linear-gradient(180deg,#e4b76a,#d9a34b)!important;box-shadow:0 0 14px rgba(217,163,75,.20)!important}

/* Pequenas áreas de erro técnico */
[style*="#091522"]{background:#fff0f3!important}
[style*="#243b52"]{border-color:#f3c8d2!important}
[style*="#ff9eb0"]{color:#d84d6b!important}

[style*="#091522"],[style*="#0c1929"],[style*="#0d1b2d"],[style*="#0b1a2b"],[style*="#07111f"],[style*="#132338"],[style*="#102237"]{background:#ffffff!important;color:#243b53!important}
[style*="#243b52"]{border-color:#dce7f2!important}
[style*="#ff9eb0"]{color:#d85c78!important}

:root{--bg:#f4f8fc!important;--panel:#ffffff!important;--panel2:#f8fbff!important;--line:#dce7f2!important;--muted:#718399!important;--text:#243b53!important;--blue:#1597f5!important;--cyan:#2bc7f5!important;--green:#27c995!important;--purple:#8b63e8!important;--orange:#f2a24a!important;--red:#ef6680!important;--shadow:0 8px 24px rgba(36,59,83,.07)!important}
html,body,#root,.app,.main,.content{background:#f4f8fc!important;color:#243b53!important}
.sidebar{background:#ffffff!important;color:#243b53!important;border-right-color:#dce7f2!important;box-shadow:8px 0 28px rgba(36,59,83,.07)!important}.logo{border-bottom-color:#e2ebf4!important}.logo h1{color:#17304a!important}.logo span,.sidebarFooter span{color:#7b8da0!important}.logoMark{background:linear-gradient(135deg,#1597f5,#2bc7f5)!important;box-shadow:0 5px 18px rgba(21,151,245,.20)!important}.nav button{color:#718399!important}.nav button:hover{background:#f2f8fd!important;color:#17304a!important}.nav button.active{background:#e5f3ff!important;border-color:#c9e7fb!important;color:#168fe9!important;box-shadow:inset 3px 0 0 #1597f5!important}.sidebarFooter{border-top-color:#e2ebf4!important}.sidebarFooter strong{color:#253b51!important}.avatar{background:linear-gradient(135deg,#1597f5,#8b63e8)!important}
.topbar{background:#f4f8fc!important;border-color:#dce7f2!important}header h1{color:#243b53!important}header span{color:#718399!important}.searchBox{background:#ffffff!important;color:#718399!important;border-color:#dce7f2!important;box-shadow:0 4px 14px rgba(36,59,83,.05)!important}.searchBox input{background:transparent!important;color:#243b53!important}.searchBox input::placeholder{color:#9aabbb!important}.bell,.logoutBtn{background:#ffffff!important;color:#4f6479!important;border-color:#dce7f2!important}.onlineDot{color:#27b987!important}.syncText,.userEmail{color:#718398!important}
.primary,button.primary,.authButton{background:linear-gradient(135deg,#168ff0,#20b6f2)!important;color:#ffffff!important;border-color:#1597f5!important;box-shadow:0 8px 22px rgba(21,151,245,.18)!important}.primary:hover,button.primary:hover{background:linear-gradient(135deg,#0e83df,#18aeea)!important}.secondary,.cancel,.close,button.secondary{background:#f2f7fb!important;color:#40566d!important;border-color:#d4e1ec!important}.secondary:hover,.cancel:hover,.close:hover,button.secondary:hover{background:#e7f0f7!important;color:#213b54!important}.danger,button.danger,.btnDanger,.deleteBtn{background:#fff0f3!important;color:#d85c78!important;border-color:#f7ccd6!important}.success,button.success,.btnSuccess{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}.warning,button.warning,.btnWarning{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}.info,button.info,.btnInfo{background:#f0eaff!important;color:#7452cf!important;border-color:#ddd0fb!important}
.card,.panel,.projectCard,.dashboardProgress,.tableWrap,.itemCard,.obraPasta,.mobileFriendlyTable tr,.toolMobileTable tr{background:#ffffff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 8px 24px rgba(36,59,83,.065)!important}.card h2,.card h3,.panel h2,.panel h3,.panelHeader h2,.itemCard h3{color:#243b53!important}.card p,.panel p,.panelHeader p,.itemCard p,.muted{color:#718399!important}.cardInfo span{color:#718399!important}.cardInfo strong{color:#243b53!important}.mobileFriendlyTable td,.toolMobileTable td{color:#344b61!important;border-color:#e5edf4!important}.mobileFriendlyTable td:first-child,.toolMobileTable td:first-child{color:#243b53!important}
.dashboardCard:nth-child(1) .cardIcon,.dashboardCard:nth-child(5) .cardIcon{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}.dashboardCard:nth-child(2) .cardIcon{background:#e6faf3!important;color:#18a878!important;border-color:#c6efdf!important}.dashboardCard:nth-child(3) .cardIcon{background:#f0eaff!important;color:#805bd8!important;border-color:#ded2fa!important}.dashboardCard:nth-child(4) .cardIcon{background:#fff3e5!important;color:#e28d32!important;border-color:#f7dfc1!important}.dashboardCard:nth-child(6) .cardIcon{background:#fff0f3!important;color:#df5a78!important;border-color:#f5d0d9!important}
.obraPastaCapa{border-bottom-color:#dce7f2!important;background:#edf5fa!important}.obraPastaSemFoto{background:radial-gradient(circle at 50% 35%,#d9edf9,#f5f9fd 72%)!important}.obraPastaCapaSombra{background:linear-gradient(180deg,rgba(10,29,47,.04) 15%,rgba(10,29,47,.16) 42%,rgba(10,29,47,.78) 100%)!important}.obraPastaCapaNome strong{color:#ffffff!important}.obraPastaCapaNome span{color:#5ed0aa!important}.obraPastaCorpo{background:#ffffff!important}.pessoaTag{background:#e8f5ff!important;color:#188fdc!important;border-color:#cbe7f8!important}
.progress,.progressTrack{background:#e8f0f6!important}.progressBar{background:linear-gradient(90deg,#1597f5,#2bc7f5)!important;box-shadow:0 0 12px rgba(43,199,245,.22)!important}.progressInfo{color:#178fe7!important}.etapaResumoHeader{color:#708399!important}.etapaResumoHeader strong{color:#1597f5!important}.obraProgress{border-top-color:#e3ecf4!important}.legendRow{color:#5f7489!important}.legendRow b{color:#344b61!important}.dot.blue{background:#1597f5!important}.dot.green{background:#27c995!important}.dot.orange{background:#f2a24a!important}.bar{background:linear-gradient(180deg,#2bc7f5,#1597f5)!important}
.status-concluido,.concluido{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}.status-pendente,.pendente{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}.status-andamento,.emAndamento{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}.status{border-color:transparent!important}
.field span{color:#40566d!important}.field span b{color:#e35d78!important}.field input,.field select,.field textarea{background:#ffffff!important;color:#243b53!important;border-color:#cbdbe8!important}.field input::placeholder,.field textarea::placeholder{color:#9aabbb!important}.field input:focus,.field select:focus,.field textarea:focus{border-color:#75c7f3!important;box-shadow:0 0 0 3px rgba(117,199,243,.18)!important}
.modalOverlay{background:rgba(13,31,48,.42)!important}.modal{background:#ffffff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 24px 65px rgba(36,59,83,.18)!important}.modalHeader{border-color:#e3ecf4!important}.modalHeader h2{color:#243b53!important}.modalHeader span{color:#718399!important}
.authScreen{background:radial-gradient(circle at 50% 0%,rgba(43,199,245,.15),transparent 34%),#f4f8fc!important;color:#243b53!important}.authCard{background:#ffffff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 22px 65px rgba(36,59,83,.12)!important}.authCard h1{color:#243b53!important}.authSubtitle,.authHint{color:#718399!important}.authError{background:#fff0f3!important;color:#d84d6b!important;border-color:#f7ccd6!important}.authSpinner{border-color:#dce7f2!important;border-top-color:#1597f5!important}.authCard .field input{background:#ffffff!important;color:#243b53!important;border-color:#cbdbe8!important}.authCard .field span{color:#40566d!important}.authBadge{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}
.toolAction,.actionBtn{background:#f5f9fd!important;color:#496078!important;border-color:#dce7f2!important}.toolAction:hover,.actionBtn:hover{background:#eaf3f9!important}.resumoDiarias{background:transparent!important;border-color:transparent!important}
.resumoDiarias>div{background:#fff!important;color:#243b53!important;border:1px solid #dce7f2!important;box-shadow:0 5px 16px rgba(31,75,110,.06)!important}
.resumoDiarias span{color:#718399!important}.resumoDiarias strong{color:#243b53!important}
.resumoDiarias>div:last-child strong{color:#1597b5!important}.diaTrabalho{background:#f7fafd!important;color:#253b51!important;border-color:#cbdbe8!important}.diaTrabalho.trabalhou{background:#e6faf3!important;border-color:#aee7d4!important;color:#147d5e!important}.diaTrabalho.naoTrabalhou{background:#f7fafd!important;color:#718399!important}


/* =========================================================
   CGL • PALETA DEFINITIVA — MODELO 2 CLARO
   Regra: somente cores/acabamento. Layout e dimensões preservados.
   ========================================================= */
:root{
  --bg:#f4f8fc!important;
  --panel:#ffffff!important;
  --panel2:#f8fbff!important;
  --line:#dce7f2!important;
  --muted:#718399!important;
  --text:#243b53!important;
  --blue:#1597f5!important;
  --cyan:#2bc7f5!important;
  --green:#27c995!important;
  --purple:#8b63e8!important;
  --orange:#f2a24a!important;
  --red:#ef6680!important;
  --shadow:0 8px 24px rgba(36,59,83,.07)!important;
}
html,body,#root,.app,.main,.content{background:#f4f8fc!important;color:#243b53!important}
.sidebar{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:8px 0 28px rgba(36,59,83,.07)!important}
.logo{border-bottom-color:#e2ebf4!important}.logo h1{color:#17304a!important}.logo span,.sidebarFooter span{color:#7b8da0!important}
.logoMark{background:linear-gradient(135deg,#1597f5,#2bc7f5)!important;box-shadow:0 5px 18px rgba(21,151,245,.2)!important}
.nav button{background:transparent!important;color:#718399!important}.nav button:hover{background:#f2f8fd!important;color:#17304a!important}.nav button.active{background:#e5f3ff!important;border-color:#c9e7fb!important;color:#168fe9!important;box-shadow:inset 3px 0 0 #1597f5!important}.sidebarFooter{border-top-color:#e2ebf4!important}.sidebarFooter strong{color:#253b51!important}.avatar{background:linear-gradient(135deg,#1597f5,#8b63e8)!important}
.topbar{background:#f4f8fc!important;border-color:#dce7f2!important}.searchBox{background:#fff!important;color:#718399!important;border-color:#dce7f2!important}.searchBox input{background:transparent!important;color:#243b53!important}.searchBox input::placeholder{color:#9aabbb!important}.bell,.logoutBtn{background:#fff!important;color:#4f6479!important;border-color:#dce7f2!important}.onlineDot{color:#27b987!important}.syncText,.userEmail{color:#718398!important}
header h1{color:#243b53!important}header span{color:#718399!important}
.primary,button.primary,.authButton{background:linear-gradient(135deg,#168ff0,#20b6f2)!important;color:#fff!important;border-color:#1597f5!important;box-shadow:0 8px 22px rgba(21,151,245,.18)!important}.primary:hover,button.primary:hover{background:linear-gradient(135deg,#0e83df,#18aeea)!important}
.secondary,.cancel,.close,button.secondary{background:#f2f7fb!important;color:#40566d!important;border-color:#d4e1ec!important}.secondary:hover,.cancel:hover,.close:hover,button.secondary:hover{background:#e7f0f7!important;color:#213b54!important}
.danger,button.danger,.btnDanger,.deleteBtn{background:#fff0f3!important;color:#d85c78!important;border-color:#f7ccd6!important}.danger:hover,button.danger:hover{background:#ffe5eb!important}
.success,button.success,.btnSuccess{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}.warning,button.warning,.btnWarning{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}.info,button.info,.btnInfo{background:#f0eaff!important;color:#7452cf!important;border-color:#ddd0fb!important}
.card,.panel,.projectCard,.dashboardProgress,.tableWrap,.itemCard,.obraPasta{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 8px 24px rgba(36,59,83,.065)!important}
.card h2,.card h3,.panel h2,.panel h3,.panelHeader h2,.itemCard h3{color:#243b53!important}.card p,.panel p,.panelHeader p,.itemCard p,.muted{color:#718399!important}.cardInfo span{color:#718399!important}.cardInfo strong{color:#243b53!important}
.dashboardCard:nth-child(1) .cardIcon,.dashboardCard:nth-child(5) .cardIcon{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}.dashboardCard:nth-child(2) .cardIcon{background:#e6faf3!important;color:#18a878!important;border-color:#c6efdf!important}.dashboardCard:nth-child(3) .cardIcon{background:#f0eaff!important;color:#805bd8!important;border-color:#ded2fa!important}.dashboardCard:nth-child(4) .cardIcon{background:#fff3e5!important;color:#e28d32!important;border-color:#f7dfc1!important}.dashboardCard:nth-child(6) .cardIcon{background:#fff0f3!important;color:#df5a78!important;border-color:#f5d0d9!important}
.projectCard{background:#fff!important}.projectShade{background:linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.78) 42%,rgba(255,255,255,.18) 100%)!important}.projectContent h3{color:#243b53!important}.projectContent p{color:#718399!important}.projectMeta span{color:#718399!important}.projectMeta strong{color:#ffffff!important;text-shadow:0 1px 3px rgba(12,31,48,.75)!important}.projectProgressPercent{color:#243b53!important}.projectMiniProgress,.projectMainProgress{background:#e8f0f6!important}.projectMiniProgressBar,.projectMainProgressBar{background:linear-gradient(90deg,#2bc7f5,#1597f5)!important;box-shadow:0 0 10px rgba(43,199,245,.22)!important}.projectStatus{background:#e6faf3!important;border-color:#bdeedc!important;color:#14986e!important}
.dashboardProgress{background:#fff!important}.donut{background:conic-gradient(#1597f5 calc(var(--p)*1%),#e8f0f6 0)!important;box-shadow:0 0 24px rgba(21,151,245,.10)!important}.donut:after{background:#fff!important}.donut span{color:#243b53!important}.legendRow{color:#5f7489!important}.legendRow b{color:#344b61!important}.dot.blue{background:#1597f5!important}.dot.green{background:#27c995!important}.dot.orange{background:#f2a24a!important}.bar{background:linear-gradient(180deg,#49d4ff,#159ff0)!important}.chartBars .barCol:nth-child(1) .bar{background:linear-gradient(180deg,#49d4ff,#159ff0)!important;box-shadow:0 0 14px rgba(21,159,240,.24)!important}.chartBars .barCol:nth-child(2) .bar{background:linear-gradient(180deg,#45dfa9,#16bd82)!important;box-shadow:0 0 14px rgba(22,189,130,.24)!important}.chartBars .barCol:nth-child(3) .bar{background:linear-gradient(180deg,#b99af0,#8b68d8)!important;box-shadow:0 0 14px rgba(139,104,216,.22)!important}.chartBars .barCol:nth-child(4) .bar{background:linear-gradient(180deg,#f5c86d,#e6a638)!important;box-shadow:0 0 14px rgba(230,166,56,.22)!important}
.obraPastaCapa{border-bottom-color:#dce7f2!important;background:#edf5fa!important}.obraPastaSemFoto{background:radial-gradient(circle at 50% 35%,#d9edf9,#f5f9fd 72%)!important}.obraPastaCapaSombra{background:linear-gradient(180deg,rgba(10,29,47,.02) 15%,rgba(10,29,47,.10) 42%,rgba(10,29,47,.68) 100%)!important}.obraPastaCapaNome strong{color:#fff!important}.obraPastaCapaNome span{color:#5ed0aa!important}.obraPastaCorpo{background:#fff!important}.pessoaTag{background:#e8f5ff!important;color:#188fdc!important;border-color:#cbe7f8!important}
.progress,.progressTrack{background:#e8f0f6!important}.progressBar{background:linear-gradient(90deg,#1597f5,#2bc7f5)!important;box-shadow:0 0 12px rgba(43,199,245,.22)!important}.progressInfo{color:#178fe7!important}.etapaResumoHeader{color:#708399!important}.etapaResumoHeader strong,.obraProgressHeader strong,.progressDashboardInfo strong{color:#1597f5!important}.obraProgress,.tarefaProgresso{border-top-color:#e3ecf4!important}.obraProgressHeader,.progressDashboardInfo,.tarefaProgressoHeader{color:#708399!important}
.tarefaControles button,.etapaControls button{background:#f2f7fb!important;color:#40566d!important;border-color:#d4e1ec!important}.tarefaControles input,.etapaControls input{background:#fff!important;color:#243b53!important;border-color:#cbdbe8!important}.tarefaControles input:focus,.etapaControls input:focus{border-color:#75c7f3!important;box-shadow:0 0 0 3px rgba(117,199,243,.18)!important}.sectionTitle{color:#243b53!important}.etapa,.funcionarioBox{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important}.etapaPercentual{color:#1597f5!important}.funcionarioInfo{color:#718399!important}.funcionarioBox input{accent-color:#1597f5!important}
.status{background:#f2f7fb!important;color:#40566d!important}.status-concluido,.concluido{background:#e6faf3!important;color:#14986e!important;border-color:#bdeedc!important}.status-pendente,.pendente{background:#fff5e8!important;color:#c8781e!important;border-color:#f6d8ad!important}.status-andamento,.status-em-andamento,.emAndamento{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}
table{color:#344b61!important}th{color:#718399!important;background:#f7fafd!important}td{color:#344b61!important;border-color:#e5edf4!important}tr:hover td{background:#f6faff!important}
.mobileFriendlyTable tr,.toolMobileTable tr,.mobileFriendlyTable tbody tr,.toolMobileTable tbody tr{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 8px 24px rgba(36,59,83,.065)!important}.mobileFriendlyTable td,.toolMobileTable td{color:#344b61!important;border-color:#e5edf4!important}.mobileFriendlyTable td:first-child,.toolMobileTable td:first-child{color:#243b53!important}.mobileFriendlyTable td:last-child,.toolMobileTable tr.toolUnitRow td:last-child{border-top-color:#e5edf4!important}
.toolAction,.actionBtn{background:#f5f9fd!important;color:#496078!important;border-color:#dce7f2!important}.toolAction:hover,.actionBtn:hover{background:#eaf3f9!important}.toolSummary{background:#f7fafd!important;color:#5f7489!important;border-color:#dce7f2!important}.toolUnitTag{background:#e8f5ff!important;color:#188fdc!important;border-color:#cbe7f8!important}.toolLocationSelect{background:#fff!important;color:#344b61!important;border-color:#cbdbe8!important}
.resumoDiarias{background:#f7fafd!important;border-color:#dce7f2!important}.resumoDiarias span{color:#718399!important}.resumoDiarias strong{color:#243b53!important}.diaTrabalho{background:#f7fafd!important;color:#253b51!important;border-color:#cbdbe8!important}.diaTrabalho.trabalhou{background:#e6faf3!important;border-color:#aee7d4!important;color:#147d5e!important}.diaTrabalho.naoTrabalhou{background:#f7fafd!important;color:#718399!important}
.photoTools input[type=file],.photoCard,.photoEmpty{background:#fff!important;color:#5f7489!important;border-color:#cbdbe8!important}.photoCard small{color:#718399!important}.photoViewer img{background:#f7fafd!important;border-color:#dce7f2!important}.photoViewerInfo{color:#718399!important}.photoViewerInfo strong{color:#243b53!important}
.field span{color:#40566d!important}.field span b{color:#e35d78!important}.field input,.field select,.field textarea{background:#fff!important;color:#243b53!important;border-color:#cbdbe8!important}.field input::placeholder,.field textarea::placeholder{color:#9aabbb!important}.field input:focus,.field select:focus,.field textarea:focus{border-color:#75c7f3!important;box-shadow:0 0 0 3px rgba(117,199,243,.18)!important}
.modalOverlay{background:rgba(20,42,62,.28)!important}.modal{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 24px 65px rgba(36,59,83,.18)!important}.modalHeader{border-color:#e3ecf4!important}.modalHeader h2{color:#243b53!important}.modalHeader span{color:#718399!important}
.authScreen{background:radial-gradient(circle at 50% 0%,rgba(43,199,245,.15),transparent 34%),#f4f8fc!important;color:#243b53!important}.authCard{background:#fff!important;color:#243b53!important;border-color:#dce7f2!important;box-shadow:0 22px 65px rgba(36,59,83,.12)!important}.authCard h1{color:#243b53!important}.authSubtitle,.authHint{color:#718399!important}.authError{background:#fff0f3!important;color:#d84d6b!important;border-color:#f7ccd6!important}.authSpinner{border-color:#dce7f2!important;border-top-color:#1597f5!important}.authCard .field input{background:#fff!important;color:#243b53!important;border-color:#cbdbe8!important}.authCard .field span{color:#40566d!important}.authBadge{background:#e8f4ff!important;color:#178fe7!important;border-color:#cfe9fb!important}
/* Remove os últimos blocos azul-marinho que apareciam em registros/erros. */
[style*="#091522"],[style*="#0c1929"],[style*="#0d1b2d"],[style*="#0b1a2b"],[style*="#07111f"],[style*="#132338"],[style*="#102237"]{background:#fff!important;color:#243b53!important}
[style*="#243b52"]{border-color:#dce7f2!important}[style*="#ff9eb0"]{color:#d85c78!important}


/* CGL — correção final das 2 áreas restantes do Dashboard.
   Somente cores/contraste; layout e lógica preservados. */

/* 1) Card da obra em destaque: texto e progresso precisam ter contraste sobre a foto. */
.projectCard{background:#ffffff!important;border-color:#dce7f2!important}
.projectImage{opacity:.96!important;filter:saturate(1.12) brightness(.98) contrast(1.04)!important}
.projectShade{
  background:linear-gradient(90deg,rgba(25,70,96,.34) 0%,rgba(25,70,96,.12) 45%,rgba(255,255,255,.02) 100%)!important;
}
.projectContent h3{color:#ffffff!important;text-shadow:0 2px 4px rgba(12,31,48,.75)!important}
.projectContent p{color:#ffffff!important;text-shadow:0 1px 3px rgba(12,31,48,.65)!important}
.projectMeta span{color:#ffffff!important;text-shadow:0 1px 3px rgba(12,31,48,.65)!important}
.projectMeta strong{color:#ffffff!important;text-shadow:0 2px 4px rgba(12,31,48,.78)!important;font-weight:800!important}
.projectProgressPercent{color:#ffffff!important;text-shadow:0 2px 4px rgba(12,31,48,.75)!important}
.projectMiniProgress,.projectMainProgress{background:rgba(232,240,246,.86)!important}
.projectMiniProgressBar,.projectMainProgressBar{
  background:linear-gradient(90deg,#2bc7f5,#1597f5)!important;
  box-shadow:0 0 10px rgba(43,199,245,.20)!important;
}
.projectStatus{
  background:#e6faf3!important;
  border-color:#bdeedc!important;
  color:#14986e!important;
}

/* 2) Últimas atividades: títulos não podem ficar quase brancos sobre fundo branco. */
.activity{border-bottom-color:#e3ecf4!important}
.activityIcon{
  background:#e8f4ff!important;
  color:#1597f5!important;
  border:1px solid #cfe9fb!important;
}
.activity strong{
  color:#243b53!important;
  font-weight:800!important;
}
.activity span{
  color:#718399!important;
}
.activity:last-child{border-bottom-color:transparent!important}


/* Correção final — resumo de diárias no modal de gerenciamento.
   Remove os últimos cartões azul-marinho que ainda escapavam da paleta clara. */
.resumoDiarias{background:transparent!important}
.resumoDiarias>div{
  background:#ffffff!important;
  border:1px solid #dce7f2!important;
  box-shadow:0 5px 16px rgba(31,75,110,.06)!important;
}
.resumoDiarias span{color:#718399!important}
.resumoDiarias strong{color:#243b53!important}
.resumoDiarias>div:last-child strong{color:#1597b5!important}

.pixCopyButton{
  margin-top:6px!important;
  background:#eef9ff!important;
  color:#147fa8!important;
  border-color:#bfe3f3!important;
  font-weight:800!important;
}
.pixCopyButton:hover{background:#e1f5ff!important}


.inputLike{
  min-height:42px;
  display:flex;
  align-items:center;
  width:100%;
  box-sizing:border-box;
  padding:10px 12px;
  border:1px solid #dce7f2;
  border-radius:12px;
  background:#f6f9fc;
  color:#344b61;
  font-weight:800;
}
.projectMeta{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px!important}
@media(max-width:760px){
  .projectMeta{
    grid-template-columns:repeat(4,minmax(0,1fr))!important;
    gap:6px!important;
    width:100%;
  }
  .projectMeta > div{
    min-width:0;
    text-align:center;
  }
  .projectMeta span{
    font-size:8px!important;
    letter-spacing:.25px!important;
    white-space:nowrap;
  }
  .projectMeta strong{
    font-size:10px!important;
    line-height:1.2!important;
    white-space:nowrap;
  }
}

.pagamentosTotalCard{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:16px;padding:15px 18px;border:1px solid #cfe4f7;border-radius:13px;background:linear-gradient(135deg,#f3f9ff 0%,#ffffff 100%);box-shadow:0 5px 15px rgba(36,59,83,.045);width:100%;box-sizing:border-box}.pagamentosTotalTexto{display:flex;flex-direction:column;gap:4px;min-width:0}.pagamentosTotalTexto strong{font-size:13px;font-weight:850;color:#243b53}.pagamentosTotalTexto span{font-size:11px;color:#718399}.pagamentosTotalValor{font-size:clamp(17px,2.4vw,22px);font-weight:900;color:#16865f;white-space:nowrap;font-variant-numeric:tabular-nums}.pagamentosTotalRegistros{margin:0 0 14px!important}.pagamentoHistoricoPanel{margin-top:14px!important}.registroPagamentoBadge{padding:7px 11px;border-radius:999px;background:#e8f4ff;color:#168fe9;border:1px solid #cfe9fb;font-size:10px;font-weight:800}.registroPagamentosGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}.registroPagamentoCard{display:flex;align-items:center;gap:12px;padding:14px;border:1px solid #dce7f2;border-radius:12px;background:#fff;box-shadow:0 6px 18px rgba(36,59,83,.055)}.registroPagamentoIcon{width:38px;height:38px;display:grid;place-items:center;border-radius:11px;background:#e6faf3;color:#14986e;border:1px solid #bdeedc;font-weight:900;flex-shrink:0}.registroPagamentoInfo{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}.registroPagamentoInfo strong{font-size:13px;color:#243b53}.registroPagamentoInfo span{font-size:10px;color:#718399}.registroPagamentoInfo small{font-size:9px;color:#9aabbb}.registroPagamentoValor{font-size:14px;color:#14986e;white-space:nowrap}.registroPagamentoAcoes{display:flex;flex-direction:column;align-items:stretch;gap:7px;min-width:180px}
.registroPagamentoAcoes .registroPagamentoValor{text-align:right;display:block;margin-bottom:1px}
.registroVoltarBtn,.registroApagarBtn{width:100%!important;min-height:38px!important;padding:8px 10px!important;border-radius:10px!important;font-size:11px!important;font-weight:800!important;white-space:normal!important}
.registroVoltarBtn{border:1px solid #cfe2f1!important;background:#f5faff!important;color:#168fe9!important}
.registroApagarBtn{border:1px solid #f1c2ca!important;background:#fff5f6!important;color:#c9435e!important}
.registroVoltarBtn:hover,.registroApagarBtn:hover{transform:translateY(-1px)}
.registroPagamentoEmpty{padding:34px 15px;text-align:center;color:#718399;display:flex;flex-direction:column;gap:6px}.registroPagamentoEmpty span{font-size:10px;color:#9aabbb}@media(max-width:650px){
  .registroPagamentosGrid{grid-template-columns:1fr}
  .pagamentosTotalCard{padding:13px 14px;gap:10px}
  .pagamentosTotalTexto strong{font-size:12px}
  .pagamentosTotalTexto span{font-size:10px}
  .pagamentosTotalValor{font-size:17px}
  .registroPagamentoCard{align-items:flex-start;flex-wrap:wrap}
  .registroPagamentoInfo{min-width:calc(100% - 52px)}
  .registroPagamentoAcoes{width:100%;min-width:0;margin-left:50px}
  .registroPagamentoAcoes .registroPagamentoValor{text-align:left}
}


.diarioPanel{overflow:hidden}
.diarioHeader{align-items:center}
.diarioResumo{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:76px;padding:9px 12px;border:1px solid #cfe2f1;border-radius:12px;background:#f5faff}
.diarioResumo strong{font-size:20px;color:#168fe9;line-height:1}
.diarioResumo span{font-size:9px;color:#718399;margin-top:4px}
.diarioLista{display:flex;flex-direction:column;gap:14px}
.diarioCard{border:1px solid #dce7f2;border-radius:15px;background:#fff;box-shadow:0 7px 22px rgba(36,59,83,.06);padding:16px}
.diarioCardTop{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}
.diarioData{font-size:10px;color:#168fe9;font-weight:800;text-transform:uppercase;letter-spacing:.4px}
.diarioCard h3{margin:5px 0 7px;font-size:17px;color:#243b53}
.diarioObraTag{display:inline-flex;align-items:center;padding:5px 9px;border-radius:999px;background:#eef8ff;border:1px solid #d3ebfb;color:#1687c8;font-size:10px;font-weight:800}
.diarioAcoes{display:flex;gap:7px;flex-shrink:0}
.diarioAcoes button{min-height:36px;padding:7px 10px;font-size:10px}
.diarioEtapa{margin-top:13px;padding:8px 10px;border-radius:9px;background:#f7fafc;color:#536b82;font-size:11px}
.diarioDescricao,.diarioObservacao{margin-top:12px}
.diarioDescricao strong,.diarioObservacao strong{font-size:11px;color:#344b61}
.diarioDescricao p,.diarioObservacao p{margin:5px 0 0;color:#536b82;font-size:12px;line-height:1.55;white-space:pre-wrap}
.diarioObservacao{padding:10px 11px;border-left:3px solid #8bc6eb;background:#f8fbfe;border-radius:7px}
.diarioFotos{display:grid;grid-template-columns:repeat(auto-fill,minmax(145px,1fr));gap:10px;margin-top:14px}
.diarioFotoCard{overflow:hidden;border:1px solid #dce7f2;border-radius:11px;background:#f7fafc}
.diarioFotoCard img{display:block;width:100%;height:150px;object-fit:cover}
.diarioFotoLegenda{padding:7px 8px;font-size:9px;color:#536b82;line-height:1.35}
.diarioEmpty{padding:55px 20px;text-align:center;border:1px dashed #cfe0ed;border-radius:14px;background:#f9fcff;display:flex;flex-direction:column;align-items:center;gap:7px;color:#718399}
.diarioEmptyIcon{font-size:38px;margin-bottom:4px}
.diarioEmpty strong{font-size:14px;color:#344b61}
.diarioEmpty span{font-size:10px}
.diarioFotoEditor{padding:13px;border:1px solid #dce7f2;border-radius:12px;background:#f9fcff}
.diarioFotoEditorHeader{display:flex;justify-content:space-between;align-items:center;gap:10px}
.diarioFotoEditorHeader>div:first-child{display:flex;flex-direction:column;gap:3px}
.diarioFotoEditorHeader strong{font-size:12px;color:#344b61}
.diarioFotoEditorHeader span{font-size:9px;color:#8a9bad}
.diarioFotoListaEditor{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin-top:11px}
.diarioFotoEditorCard{overflow:hidden;border:1px solid #dce7f2;border-radius:10px;background:#fff}
.diarioFotoEditorCard img{width:100%;height:125px;display:block;object-fit:cover}
.diarioFotoEditorCard button{width:100%;border:0!important;border-radius:0!important;min-height:32px!important;font-size:9px!important}
.diarioFotoAviso{margin-top:10px;padding:10px;border-radius:9px;background:#fff;color:#8a9bad;font-size:10px;text-align:center}
@media(max-width:650px){
  .diarioCard{padding:13px}
  .diarioCardTop{flex-direction:column}
  .diarioAcoes{width:100%}
  .diarioAcoes button{flex:1}
  .diarioFotos{grid-template-columns:repeat(2,minmax(0,1fr))}
  .diarioFotoCard img{height:125px}
  .diarioFotoEditorHeader{flex-direction:column;align-items:stretch}
  .diarioFotoEditorHeader .photoActions{width:100%}
  .diarioFotoEditorHeader .photoActions button{flex:1}
  .diarioResumo{min-width:60px}
}

/* Diário de Obra — Layout 1: clean, simples e direto. */
.diarioHeaderAcoes{display:flex;align-items:center;gap:10px}
.pdfAcoes{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.pdfBtn,.pdfShareBtn{min-height:36px;padding:8px 12px;font-size:10px}
.pdfBtn{font-weight:800}
.diarioPanel .panelHeader{border-bottom:1px solid #e6edf4;padding-bottom:12px;margin-bottom:14px}
.diarioPanel .diarioCard{border:1px solid #d9e4ee;border-radius:13px;background:#fff;box-shadow:0 5px 18px rgba(15,23,42,.055)}
.diarioPanel .diarioCardTop{padding-bottom:9px;border-bottom:1px solid #eef2f6}
.diarioPanel .diarioData{color:#147fe8}
.diarioPanel .diarioCard h3{font-size:16px;margin-top:4px}
.diarioPanel .diarioDescricao strong,.diarioPanel .diarioObservacao strong{font-size:10px;text-transform:uppercase;letter-spacing:.25px}
.diarioPanel .diarioFotoCard{border-radius:9px}
.diarioPanel .diarioFotoCard img{height:145px}
@media(max-width:650px){
  .diarioHeaderAcoes{width:100%;justify-content:space-between;align-items:center}
  .diarioHeaderAcoes .pdfAcoes{flex:1;justify-content:flex-end}
  .diarioHeaderAcoes .pdfAcoes button{min-height:34px}
  .pdfAcoes{gap:5px}
  .pdfBtn,.pdfShareBtn{padding:7px 9px;font-size:9px}
}
/* =========================================================
   FUNCIONÁRIOS — MODELO 2
   Somente aparência: mantém as funções e ações existentes.
   ========================================================= */
.funcionariosPanel{
  background:#ffffff!important;
  border:1px solid #dce7f2!important;
  box-shadow:0 8px 28px rgba(36,59,83,.07)!important;
  color:#243b53!important;
}
.funcionariosTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:18px;
}
.funcionariosTitulo{
  display:flex;
  align-items:center;
  gap:12px;
}
.funcionariosTituloIcon{
  width:44px;
  height:44px;
  display:grid;
  place-items:center;
  border-radius:13px;
  background:#eaf4ff;
  border:1px solid #cfe5f8;
  color:#167fe8;
  font-size:21px;
}
.funcionariosContador{
  min-width:54px;
  height:54px;
  padding:0 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  border-radius:18px;
  background:#eef8ff;
  border:2px solid #167fe8;
  color:#167fe8;
  font-size:21px;
  font-weight:900;
  line-height:1;
  letter-spacing:.2px;
  box-shadow:0 6px 18px rgba(22,127,232,.10);
}
.funcionarioNumero{
  min-width:38px;
  height:38px;
  padding:0 6px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  flex:0 0 auto;
  border-radius:50%;
  background:#eef8ff;
  border:2px solid #cfe5f8;
  color:#167fe8;
  font-size:13px;
  font-weight:900;
  line-height:1;
  letter-spacing:.2px;
}
.funcionariosTitulo h2{
  margin:0 0 3px;
  color:#243b53!important;
  font-size:18px;
  font-weight:850;
}
.funcionariosTitulo p{
  margin:0;
  color:#718399!important;
  font-size:11px;
}
.funcionariosGrid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:13px;
}
.funcionarioCard{
  min-width:0;
  padding:15px;
  border:1px solid #dce7f2;
  border-radius:15px;
  background:#ffffff;
  box-shadow:0 6px 18px rgba(36,59,83,.055);
  transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;
}
.funcionarioCard:hover{
  transform:translateY(-2px);
  border-color:#b9d8ef;
  box-shadow:0 10px 25px rgba(36,59,83,.09);
}
.funcionarioCardHeader{
  display:flex;
  align-items:center;
  gap:10px;
  min-width:0;
}
.funcionarioAvatar{
  width:54px;
  height:54px;
  flex:0 0 54px;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:15px;
  font-weight:900;
  border:3px solid #fff;
  box-shadow:0 3px 12px rgba(36,59,83,.12);
}
.funcionarioAvatar.azul{background:#dceeff;color:#167fe8}
.funcionarioAvatarFoto{object-fit:cover;background:#f1f5f9}
.funcionarioAvatar.verde{background:#def8eb;color:#14966b}
.funcionarioAvatar.roxo{background:#eee5ff;color:#7651c8}
.funcionarioAvatar.laranja{background:#fff0d8;color:#c57919}
.funcionarioIdentidade{
  min-width:0;
  flex:1;
}
.funcionarioIdentidade h3{
  margin:0 0 4px;
  color:#243b53!important;
  font-size:13px;
  font-weight:850;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.funcionarioIdentidade span{
  display:block;
  color:#718399!important;
  font-size:10px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.funcionarioStatus{
  flex:0 0 auto;
  padding:5px 8px;
  border-radius:999px;
  font-size:9px;
  font-weight:850;
}
.funcionarioStatus.ativo{
  background:#def8eb;
  border:1px solid #bdebd7;
  color:#15966b;
}
.funcionarioStatus.disponivel{
  background:#f1f5f9;
  border:1px solid #d9e2ec;
  color:#5f7185;
}
.funcionarioCardInfo{
  display:flex;
  flex-direction:column;
  gap:8px;
  margin-top:15px;
}
.funcionarioInfoLinha{
  display:flex;
  align-items:center;
  gap:8px;
  min-width:0;
  color:#536b82;
  font-size:10px;
}
.funcionarioInfoLinha>span:last-child,
.funcionarioInfoLinha>strong{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.funcionarioInfoLinha strong{
  color:#243b53!important;
  font-size:11px;
}
.funcionarioInfoLinha small{
  color:#718399;
  font-size:9px;
  font-weight:700;
}
.funcionarioInfoIcon{
  width:25px;
  height:25px;
  flex:0 0 25px;
  display:grid;
  place-items:center;
  border-radius:8px;
  background:#f1f7fc;
  border:1px solid #dceaf5;
  color:#168fe9;
  font-size:10px;
  font-weight:900;
}
.funcionarioCardDivider{
  height:1px;
  background:#edf2f6;
  margin:14px 0 11px;
}
.funcionarioCardActions{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
  gap:6px;
}
.funcionarioCardActions button,
.funcionarioPixBtn{
  min-height:34px;
  border-radius:9px;
  font-size:9px;
  font-weight:850;
  transition:.16s;
}
.funcionarioVerBtn{
  border:1px solid #dce7f2;
  background:#f5f9fc;
  color:#3d5870;
  padding:7px 8px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.funcionarioVerBtn:hover{
  background:#eaf4fb;
  border-color:#c8ddeb;
}
.funcionarioEditBtn{
  border:1px solid #168fe9;
  background:#168fe9;
  color:#fff;
  padding:7px 11px;
  white-space:nowrap;
}
.funcionarioEditBtn:hover{
  background:#087bd4;
}
.funcionarioDeleteBtn{
  width:100%;
  min-height:34px;
  padding:7px 11px;
  border:1px solid #f2c8d0;
  border-radius:9px;
  background:#fff5f6;
  color:#d34e67;
  font-size:9px;
  font-weight:850;
  white-space:nowrap;
}
.funcionarioDeleteDesktop{
  display:inline;
}
.funcionarioDeleteMobile{
  display:none;
}
.funcionarioDeleteBtn:hover{
  background:#ffeaed;
}
.funcionarioPixBtn{
  width:100%;
  margin-top:8px;
  padding:7px 10px;
  border:1px solid #bfe3f3;
  background:#eef9ff;
  color:#147fa8;
}
.funcionarioPixBtn:hover{
  background:#e1f5ff;
}
.funcionarioCpf{
  margin-top:9px;
  color:#8a9bad;
  font-size:9px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.funcionarioCpf strong{
  color:#536b82;
}
.funcionarioFotoEditor{
  display:flex;
  align-items:center;
  gap:13px;
  padding:12px 0 16px;
  margin-bottom:4px;
  border-bottom:1px solid #edf2f6;
}
.funcionarioFotoBotao{
  position:relative;
  width:76px!important;
  height:76px!important;
  min-width:76px!important;
  min-height:76px!important;
  max-width:76px!important;
  max-height:76px!important;
  flex:0 0 76px!important;
  aspect-ratio:1 / 1;
  padding:0;
  border:3px solid #dce7f2;
  border-radius:50%;
  overflow:visible;
  background:#eef6ff;
  color:#167fe8;
  display:grid;
  place-items:center;
  cursor:pointer;
  box-shadow:0 4px 14px rgba(36,59,83,.10);
}
.funcionarioFotoBotao>img{
  position:absolute;
  left:3px;
  top:3px;
  width:70px!important;
  height:70px!important;
  min-width:70px!important;
  min-height:70px!important;
  max-width:70px!important;
  max-height:70px!important;
  object-fit:cover;
  border-radius:50%;
  display:block;
}
.funcionarioFotoBotao>span:first-child{
  font-size:27px;
}
.funcionarioFotoCamera{
  position:absolute;
  right:-2px;
  bottom:-2px;
  width:25px;
  height:25px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:#168fe9;
  border:2px solid #fff;
  font-size:11px;
}
.funcionarioFotoEditor strong{
  display:block;
  color:#243b53;
  font-size:12px;
}
.funcionarioFotoEditor small{
  display:block;
  margin-top:4px;
  color:#718399;
  font-size:10px;
}
@media(max-width:1100px){
  .funcionariosGrid{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}
@media(max-width:850px){
  .funcionariosGrid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}
@media(max-width:650px){
  .funcionariosPanel{
    padding:13px!important;
  }
  .funcionariosTop{
    margin-bottom:13px;
  }
  .funcionariosContador{
    min-width:44px;
    height:44px;
    padding:0 9px;
    border-radius:14px;
    font-size:17px;
  }
  .funcionarioNumero{
    min-width:44px;
    height:44px;
    padding:0 8px;
    font-size:17px;
  }
  .funcionariosTituloIcon{
    width:40px;
    height:40px;
    border-radius:11px;
  }
  .funcionariosTitulo h2{
    font-size:16px;
  }
  .funcionariosTitulo p{
    font-size:10px;
  }
  .funcionariosGrid{
    grid-template-columns:1fr;
    gap:10px;
  }
  .funcionarioCard{
    padding:13px;
    border-radius:13px;
  }
  .funcionarioAvatar{
    width:48px;
    height:48px;
    flex-basis:48px;
  }
  .funcionarioCardActions{
    grid-template-columns:minmax(0,1fr) auto auto;
  }
  .funcionarioCardActions button{
    min-height:36px;
  }
  .funcionarioDeleteBtn{
    width:35px;
    padding:0;
  }
  .funcionarioDeleteDesktop{
    display:none;
  }
  .funcionarioDeleteMobile{
    display:inline;
  }
}
@media(min-width:651px) and (max-width:1050px){
  .funcionarioCardActions{
    grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
  }
}
/* TAREFAS — MODELO 2: cards claros e responsivos */
.tarefasModelo2Panel{
  padding:18px;
  border:1px solid #dfe7ef;
  border-radius:18px;
  background:#ffffff;
  box-shadow:0 8px 26px rgba(31,64,96,.07);
}
.tarefasModelo2Top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  margin-bottom:16px;
}
.tarefasModelo2Titulo{display:flex;align-items:center;gap:12px;min-width:0}
.tarefasModelo2Icon{
  width:44px;height:44px;display:grid;place-items:center;
  border-radius:12px;background:#eaf3ff;color:#1677df;
  border:1px solid #d8eaff;font-size:22px;font-weight:900;
}
.tarefasModelo2Titulo h2{margin:0;color:#172433;font-size:20px;line-height:1.15}
.tarefasModelo2Titulo p{margin:4px 0 0;color:#718096;font-size:11px}
.tarefasModelo2Novo{
  border:0;border-radius:9px;background:#1677df;color:#fff;
  padding:10px 15px;font-size:11px;font-weight:850;cursor:pointer;
  box-shadow:0 4px 10px rgba(22,119,223,.16);
}
.tarefasModelo2Novo:hover{filter:brightness(1.04)}
.tarefasModelo2Resumo{
  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;margin-bottom:15px;
}
.tarefasResumoCard{
  display:flex;align-items:center;gap:10px;min-width:0;
  padding:10px 12px;border:1px solid #e1e8ef;border-radius:11px;background:#fff;
}
.tarefasResumoIcon{
  width:34px;height:34px;display:grid;place-items:center;border-radius:10px;
  background:#edf5ff;color:#1677df;font-size:15px;font-weight:900;
}
.tarefasResumoIcon.pendente{background:#fff7df;color:#e7a400}
.tarefasResumoIcon.andamento{background:#edf6ff;color:#2587e8}
.tarefasResumoIcon.concluida{background:#eaf9f0;color:#1aa35a}
.tarefasResumoCard strong{display:block;color:#182534;font-size:16px;line-height:1}
.tarefasResumoCard small{display:block;margin-top:4px;color:#748196;font-size:9px}
.tarefasModelo2Grid{
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;
}
.tarefaModelo2Card{
  position:relative;min-width:0;padding:14px;border:1px solid #dfe7ef;
  border-radius:13px;background:#fff;box-shadow:0 4px 13px rgba(30,60,90,.045);
}
.tarefaModelo2Cabecalho{
  display:flex;justify-content:space-between;gap:8px;min-height:47px;
}
.tarefaModelo2Cabecalho h3{
  margin:0;color:#182534;font-size:13px;line-height:1.3;
  overflow-wrap:anywhere;padding-right:2px;
}
.tarefaModelo2Cabecalho span:not(.tarefaModelo2Menu){
  display:block;margin-top:5px;color:#68778a;font-size:9px;line-height:1.25;
}
.tarefaModelo2Menu{
  color:#6d7d90;font-size:18px;line-height:18px;flex:0 0 auto;
}
.tarefaModelo2Progresso{margin-top:10px}
.tarefaModelo2ProgressoTopo{
  display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;
  color:#68778a;font-size:9px;
}
.tarefaModelo2ProgressoTopo strong{color:#1677df;font-size:11px}
.tarefaModelo2Barra{height:7px;border-radius:99px;background:#e9eef3;overflow:hidden}
.tarefaModelo2Barra div{
  height:100%;border-radius:99px;background:linear-gradient(90deg,#1686ed,#38a4ff);
  transition:width .25s ease;
}
.tarefaModelo2Info{
  display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px;
  color:#667589;font-size:9px;
}
.tarefaModelo2Info span{min-width:0;overflow-wrap:anywhere}
.tarefaModelo2Controles{
  display:grid;grid-template-columns:repeat(2,1fr) 52px repeat(2,1fr);
  gap:4px;margin-top:10px;
}
.tarefaModelo2Controles button,.tarefaModelo2Controles input{
  height:28px;border-radius:7px;border:1px solid #dce5ee;
  background:#f7fafc;color:#547087;font-size:8px;font-weight:800;text-align:center;
}
.tarefaModelo2Controles input{background:#fff;color:#172433;font-size:10px;outline:none;width:100%}
.tarefaModelo2Controles input:focus{border-color:#4c9bed;box-shadow:0 0 0 2px rgba(76,155,237,.12)}
.tarefaModelo2Rodape{
  display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) 36px;
  gap:5px;margin-top:10px;padding-top:10px;border-top:1px solid #edf1f5;
}
.tarefaModelo2Rodape .status{
  min-width:0;width:100%;padding:7px 8px;border:1px solid #e0e7ee;
  background:#f7fafc;color:#52677c;
}
.tarefaModelo2Editar,.tarefaModelo2Excluir{
  min-width:0;border-radius:8px;font-size:9px;font-weight:850;cursor:pointer;
}
.tarefaModelo2Editar{border:1px solid #d5e8fb;background:#edf6ff;color:#1677df}
.tarefaModelo2Excluir{border:1px solid #f3d7dc;background:#fff6f7;color:#d14b5e}
.tarefasModelo2Empty{
  min-height:230px;display:flex;align-items:center;justify-content:center;
  flex-direction:column;gap:7px;color:#718096;text-align:center;
  border:1px dashed #d8e1ea;border-radius:13px;background:#fbfcfd;
}
.tarefasModelo2Empty div{font-size:28px;color:#1677df}
.tarefasModelo2Empty strong{color:#263647;font-size:13px}
.tarefasModelo2Empty span{font-size:10px}
@media(max-width:1050px){
  .tarefasModelo2Grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:700px){
  .tarefasModelo2Panel{padding:12px;border-radius:14px}
  .tarefasModelo2Top{align-items:flex-start;margin-bottom:12px}
  .tarefasModelo2Titulo h2{font-size:17px}
  .tarefasModelo2Titulo p{font-size:9px}
  .tarefasModelo2Icon{width:38px;height:38px;font-size:18px}
  .tarefasModelo2Novo{padding:9px 11px;font-size:10px}
  .tarefasModelo2Resumo{grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
  .tarefasResumoCard{padding:8px 9px}
  .tarefasResumoIcon{width:30px;height:30px;font-size:13px}
  .tarefasResumoCard strong{font-size:14px}
  .tarefasModelo2Grid{grid-template-columns:1fr;gap:9px}
  .tarefaModelo2Card{padding:12px}
  .tarefaModelo2Controles{grid-template-columns:repeat(2,1fr) 48px repeat(2,1fr)}
}
@media(max-width:390px){
  .tarefasModelo2Top{gap:8px}
  .tarefasModelo2Novo{padding:8px 9px}
  .tarefasModelo2Titulo p{display:none}
  .tarefaModelo2Info{grid-template-columns:1fr}
}

/* Gerenciamento e edição de obra ocupam toda a tela, sem alterar os outros modais. */
.modalOverlay.modalTelaCheia{
  position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;height:100dvh!important;
  padding:0!important;margin:0!important;align-items:stretch!important;justify-content:stretch!important;
  overflow:hidden!important;border-radius:0!important;z-index:1000!important;
}
.modalTelaCheia .modalJanelaTelaCheia{
  width:100%!important;max-width:none!important;height:100vh!important;height:100dvh!important;max-height:none!important;
  margin:0!important;border-radius:0!important;border:0!important;display:flex!important;flex-direction:column!important;
  overflow:hidden!important;box-shadow:none!important;
}
.modalJanelaTelaCheia .modalHeader{flex:0 0 auto;position:sticky;top:0;z-index:2;background:#fff!important;padding:16px 22px!important}
.modalJanelaTelaCheia .modalBody{flex:1 1 auto;min-height:0;overflow-y:auto!important;overscroll-behavior:contain;padding:22px!important}
@media(max-width:650px){
  .modalJanelaTelaCheia .modalHeader{padding:13px 14px!important}
  .modalJanelaTelaCheia .modalBody{padding:14px!important;padding-bottom:24px!important}
}


/* CGL — meia diária: ajuste visual exclusivo para PC, preservando o celular. */
@media (min-width: 651px) {
  .diasSemanaGrid > div{min-width:0;}
  .diaTrabalho{width:100%;min-width:0;box-sizing:border-box;flex-shrink:0;}
  .diaTrabalho b{white-space:nowrap;display:block;font-size:clamp(8px, 0.72vw, 10px);line-height:1.2;}
  .meiaDiariaControle{white-space:nowrap;flex-wrap:nowrap;justify-content:center;min-height:26px;box-sizing:border-box;}
  .meiaDiariaControle input{flex:0 0 auto;margin:0;}
}
`;
