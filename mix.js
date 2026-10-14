
(function(){
'use strict';
const mEsc = x => String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mathName=n=>(mathTitle[n]||'Профильная математика');
const rusName=n=>(russianTitle[n]||'Русский язык');
let originals=[];
function add(sub,num,level,title,question,answer,steps,topic,open){
 const t={id:'mix27-'+(originals.length+1),subject:sub,number:num,level:level,kind:title,topic:topic||'ЕГЭ 2027',question:question,answer:String(answer),steps:Array.isArray(steps)?steps:[steps],source:'Авторский аналог · проект ЕГЭ–2027',tags:['2027','новое','микс'],extended:!!open};
 originals.push(t);
}
for(let i=0;i<12;i++){
 let b=2+i%2, q=3+i, t=1+i%6,p=q-(b-1)*t,x=q+t;
 add('algebra',7,'Повышенный','Логарифмическое уравнение с ОДЗ','Найдите корень уравнения: log_'+b+'(x−('+p+')) − log_'+b+'(x−'+q+') = 1.',x,['ОДЗ: x > max('+p+', '+q+') = '+q+'.','Разность логарифмов: log_'+b+'((x−('+p+'))/(x−'+q+'))=1.','Дробь равна '+b+'. Получаем x = '+x+'. Корень удовлетворяет ОДЗ.'],'log');
 let base=2+i%2,k=2+i%3,shift=i-3,lim=shift+Math.pow(base,k)+1;
 add('algebra',16,'Сложный','Логарифмическое неравенство','Найдите наименьшее целое x, удовлетворяющее log_'+base+'(x−('+shift+')) > '+k+'.',lim,['ОДЗ: x > '+shift+'. Основание '+base+' больше 1, знак не меняется.','x−('+shift+') > '+Math.pow(base,k)+', то есть x > '+(lim-1)+'.','Наименьшее целое решение: '+lim+'.'],'log');
 let a=1+i%4,z=2+i%3,c=1+i%5,n=i%4+1,y=3*a*n*n-2*z*n+c;
 add('algebra',9,'Средний','Производная многочлена','Найдите f′('+n+'), если f(x)='+a+'x³−'+z+'x²+'+c+'x.',y,['f′(x)='+3*a+'x²−'+2*z+'x+'+c+'.','Подставляем x='+n+'. Получаем '+y+'.'],'derivative');
 let u=2+i%7, v=3+i%5;
 add('geometry',2,'Базовый','Скалярное произведение векторов','Даны a=('+u+'; −2), b=(3; '+v+'). Найдите a·b.',3*u-2*v,['В координатах: a·b=a₁b₁+a₂b₂.','3·'+u+'−2·'+v+'='+(3*u-2*v)+'.'],'vectors');
 let h=3+i%6,r=2+i%4;
 add('geometry',3,'Средний','Объём цилиндра','Радиус основания цилиндра '+r+', высота '+h+'. Найдите V/π.',r*r*h,['V=πr²h.','V/π='+r+'²·'+h+'='+(r*r*h)+'.'],'solid');
 let N=20+i, wins=5+i%5;
 add('algebra',4,'Базовый','Классическая вероятность','В лотерее '+N+' равновероятных билетов, выигрышных '+wins+'. Найдите вероятность выигрыша. Ответ — дробь или десятичное число.',wins+'/'+N,['Вероятность = благоприятные исходы / все исходы.','P='+wins+'/'+N+' (можно сократить).'],'probability');
 let t1=2+i%6, t2=3+i%5, speed=t1+t2;
 add('algebra',11,'Средний','Задача на движение','Два велосипедиста движутся навстречу друг другу со скоростями '+t1+' и '+t2+' км/ч из пунктов на расстоянии '+speed*4+' км. Через сколько часов они встретятся?',4,['Скорость сближения '+t1+'+'+t2+'='+speed+' км/ч.','t='+speed*4+'/'+speed+'=4 ч.'],'motion');
 let p=3+i%7, h2=2+i%5;
 add('algebra',8,'Базовый','Степени и преобразования','Вычислите (2^'+p+' · 2^'+h2+') / 2^'+(p+h2-3)+'.',8,['При умножении степени складываются, при делении вычитаются.','Показатель равен '+p+'+'+h2+'−'+(p+h2-3)+'=3; 2³=8.'],'powers');
}
for(let i=0;i<10;i++){
 const A=2+i%4,B=3+i%5,n=5+i;
 add('algebra',6,'Средний','Математическое ожидание','Случайная величина X равна '+A+' с вероятностью 0,4 и '+B+' с вероятностью 0,6. Найдите E(X).',String((.4*A+.6*B).toFixed(1)).replace('.',','),['E(X)=Σ xᵢpᵢ.','E(X)='+A+'·0,4+'+B+'·0,6='+(.4*A+.6*B).toFixed(1)+'.'],'probstat');
 add('algebra',13,'Повышенный','Семейные финансы','Вклад '+n*10000+' рублей увеличивается на 10% в конце каждого года. Сколько рублей будет через два года без пополнений?',Math.round(n*10000*1.21),['Множитель роста за год: 1,1.','Через 2 года: '+n*10000+'·1,1²='+Math.round(n*10000*1.21)+' рублей.'],'finances');
 const z=2+i%6;
 add('algebra',12,'Средний','Квадратичная функция','Найдите минимальное значение f(x)=(x−'+z+')²+'+A+' на всей числовой прямой.',A,['Квадрат неотрицателен при любом x.','Минимум 0 достигается при x='+z+'.','Минимальное значение '+A+'.'],'functions');
 add('geometry',1,'Средний','Прямоугольный треугольник','Катеты прямоугольного треугольника '+(3+i%4)*2+' и '+(4+i%3)*2+'. Найдите его площадь.',(3+i%4)*(4+i%3)*2,['Площадь прямоугольного треугольника равна половине произведения катетов.','S=1/2·'+((3+i%4)*2)+'·'+((4+i%3)*2)+'='+(3+i%4)*(4+i%3)*2+'.'],'triangle');
}
[
 ['algebra',14,'Сложный','Тригонометрия: отбор корней','Решите sin x = 1/2 и укажите корни на [0; 2π].','π/6; 5π/6',['Общее решение: x=π/6+2πn или x=5π/6+2πn, n∈Z.','На указанном отрезке остаются π/6 и 5π/6.'],'trigonometry'],
 ['algebra',14,'Эксперт','Тригонометрическое уравнение','Решите 2cos²x − 3cos x + 1 = 0 и отберите корни на [0; 2π].','0; π/3; 5π/3; 2π',['Подставим t=cos x: 2t²−3t+1=0 → t=1 или t=1/2.','cos x=1 даёт x=0, 2π; cos x=1/2 даёт π/3 и 5π/3.'],'trigonometry'],
 ['algebra',16,'Сложный','Метод интервалов','Решите неравенство (x−1)(x−4)/(x−3) ≤ 0.','(−∞;1] ∪ (3;4]',['Критические точки 1,3,4. x=3 исключается из ОДЗ.','По таблице знаков получаем (−∞;1] и (3;4].'],'inequality'],
 ['algebra',19,'Эксперт','Задача с параметром','Найдите все a, при которых уравнение |x−a|=3 имеет ровно один положительный корень.','−3 < a ≤ 3',['Корни: x=a−3 и x=a+3, они различны.','Ровно один положителен, если a+3>0 и a−3≤0.','Следовательно, −3 < a ≤ 3.'],'parameters'],
 ['algebra',20,'Сложный','Теория чисел: делимость','Найдите наименьшее натуральное число n, при котором n делится на 12 и на 18 и n>100.',108,['НОК(12,18)=36.','Первое кратное 36 больше 100 — 108.'],'numbertheory'],
 ['geometry',15,'Эксперт','Стереометрия с доказательством','В правильной четырёхугольной пирамиде сторона основания 6, высота 4. Найдите объём и обоснуйте, почему высота проходит через центр основания.',48,['Для правильной пирамиды вершина проецируется в центр квадратного основания по определению.','S основания=6²=36.','V=1/3·36·4=48.'],'solid'],
 ['geometry',18,'Сложный','Планиметрия: доказательство','В прямоугольном треугольнике катеты равны 6 и 8. Докажите, что радиус описанной окружности равен 5.','5',['По теореме Пифагора гипотенуза c=√(36+64)=10.','Центр описанной окружности прямоугольного треугольника — середина гипотенузы.','Радиус R=c/2=5.'],'triangle'],
 ['algebra',17,'Эксперт','Оптимизация','Из 40 метров ограждения делают прямоугольный загон. Найдите максимальную площадь, если длины сторон положительны.',100,['2(a+b)=40 → a+b=20.','S=a(20−a)=100−(a−10)².','Максимум S=100 при a=b=10.'],'derivative'],
 ['algebra',19,'Сложный','Параметр и дискриминант','При каких значениях параметра a уравнение x²−2ax+9=0 имеет единственный действительный корень?','−3;3',['Единственный действительный корень у квадратного уравнения ⇔ D=0.','D=4a²−36=0 → a²=9 → a=±3.'],'parameters'],
 ['algebra',20,'Эксперт','Числа и их свойства','Найдите все двузначные числа, которые делятся на 9 и при перестановке цифр уменьшаются на 27.','63',['Пусть число 10a+b, а после перестановки 10b+a. Разность 9(a−b)=27, значит a−b=3.','Для делимости на 9 нужно a+b кратно 9.','При a=b+3 получаем 2b+3=9 или 18. b=3 даёт a=6, число 63; второй случай не целый.','Правильный ответ: 63.'],'numbertheory'],
 ['algebra',14,'Повышенный','Уравнение с ОДЗ','Решите log₂(x−1)+log₂(x+1)=3.','3',['ОДЗ: x>1.','log₂((x−1)(x+1))=3 → x²−1=8 → x²=9.','Из x=±3 по ОДЗ подходит только 3.'],'log']
].forEach(z=>add(z[0],z[1],z[2],z[3],z[4],z[5],z[6],z[7],true));
const russian=[
[4,'Базовый','Ударения','Укажите номера слов с верно выделенной ударной гласной.\n1) тОрты\n2) звОнит\n3) красИвее\n4) каталОг\n5) жАлюзи','134',['тОрты — верно; звонИт — неверно; красИвее — верно; каталОг — верно; жалюзИ — неверно.']],
[5,'Средний','Паронимы','В каком предложении неверно употреблено выделенное слово? Укажите номер.\n1) Он предъявил АБОНЕМЕНТ в бассейн.\n2) На дороге установили ПРЕДУПРЕДИТЕЛЬНЫЙ знак.\n3) Она надела ЭФФЕКТНОЕ платье.\n4) Мы приняли ЭФФЕКТИВНЫЕ меры.\n5) В университете учатся ГУМАННЫЕ науки.','5',['Правильно: гуманитарные науки; гуманный — человеколюбивый.']],
[7,'Средний','Морфологические нормы','Укажите предложение с ошибкой в форме слова.\n1) около трёхсот метров\n2) более красивее\n3) в две тысячи пятом году\n4) пять яблок\n5) много чулок','2',['Сравнительная степень образована дважды: правильно «красивее» или «более красивый».']],
[9,'Повышенный','Правописание корней','Укажите номера слов с чередующейся гласной в корне.\n1) загореть\n2) примирять друзей\n3) растущий\n4) собирать\n5) лесной','134',['гар/гор, раст/ращ/рос, бер/бир — чередование.','В слове «примирять» проверочное «мир», в слове «лесной» — «лес».']],
[10,'Средний','Правописание приставок','Укажите варианты, где в приставке пишется З.\n1) ра..бить\n2) бе..шумный\n3) и..пугать\n4) во..дать\n5) ра..сказать','14',['Перед звонкими согласными в приставках на з/с пишется з: разбить, воздать.','Перед глухими — с: бесшумный, испугать, рассказать.']],
[12,'Сложный','Суффиксы причастий','Укажите номера слов, в которых на месте пропуска пишется Ю.\n1) кол..щий\n2) дыш..щий\n3) стро..щий\n4) бор..щийся\n5) та..щий','145',['Колющий, борющийся, тающий — пишем Ю.','Дышащий — А, строящий — Я.','Правильный ответ: 1, 4 и 5.']],
[13,'Средний','НЕ и НИ','Укажите номера случаев слитного написания НЕ.\n1) (не)вежда\n2) (не)прочитанная книга\n3) (не)был\n4) вовсе (не)интересно\n5) (не)смотря на дождь (в значении «вопреки»)','15',['Невежда — слово без «не» не употребляется.','Несмотря на — производный предлог.','Непрочитанная книга — полное причастие без зависимых слов и противопоставления: пишется слитно.']],
[14,'Повышенный','Слитно и раздельно','Укажите предложения, где выделенное слово пишется слитно.\n1) ЧТО(БЫ) успеть, выйди раньше.\n2) Он сделал ТАК(ЖЕ), как я.\n3) Мы пришли (В)ТЕЧЕНИЕ часа.\n4) Мы ТО(ЖЕ) согласились.\n5) (ПО)МОЕМУ мнению, пора идти.','14',['Чтобы — союз со значением цели; тоже — союз со значением «также».','Так же как — раздельно; в течение часа — предлог в два слова; по моему мнению — раздельно.']],
[15,'Средний','Н и НН','Укажите цифры слов, в которых пишется НН.\n1) стекля..ый\n2) серебря..ый\n3) ветре..ый\n4) време..ый\n5) ю..ый','14',['Стеклянный — исключение: НН. Временный — суффикс -енн-: НН.','Серебряный, ветреный, юный — одна Н.']],
[15,'Повышенный','Н и НН: причастия','Укажите цифры слов, в которых пишется НН.\n1) жаре..ая на масле картошка\n2) краше..ый забор\n3) маринова..ые огурцы\n4) ветре..ый день\n5) подписа..ый договор','135',['Жаренная на масле — есть зависимые слова; маринованный — -ованн-; подписанный — полное страдательное причастие.','Крашеный забор (без зависимых слов) и ветреный день — одна Н.']],
[16,'Средний','Однородные члены','Укажите номера предложений, где нужна одна запятая.\n1) Мы купили яблоки и груши.\n2) В саду росли и липы и клёны.\n3) Было тихо и спокойно.\n4) Мы хотели уехать но задержались.\n5) На улице шёл дождь.','24',['И липы, и клёны — повторяющийся союз, ставим запятую между однородными.','Перед «но» между однородными сказуемыми нужна запятая.']],
[17,'Средний','Обособленные определения','Нужно ли ставить запятые в предложении? Ответьте ДА или НЕТ.\nДорога освещённая фонарями уходила к реке.','ДА',['Причастный оборот «освещённая фонарями» стоит после определяемого слова «дорога».','Верно: Дорога, освещённая фонарями, уходила к реке.']],
[18,'Сложный','Вводные слова','Укажите номера предложений, где выделенное слово вводное (нужны запятые).\n1) К СЧАСТЬЮ, дождь закончился.\n2) Он КАЖЕТСЯ усталым.\n3) Он, КАЖЕТСЯ, уснул.\n4) ЭТО БЫЛО ОЧЕВИДНО всем.\n5) ПО-МОЕМУ, ты прав.','135',['К счастью, кажется (=вероятно), по-моему — вводные.','Кажется усталым — сказуемое. «Было очевидно» — член предложения.']],
[19,'Повышенный','СПП','Укажите все цифры, на месте которых нужны запятые.\nКогда наступила ночь (1) мы зажгли свет (2) потому что стало темно (3) и закрыли окна.','12',['Придаточное времени заканчивается перед «мы» → запятая 1.','Придаточное причины начинается с «потому что» → запятая 2.','Между сказуемыми «зажгли» и «закрыли» с союзом «и» запятая 3 не нужна.']],
[20,'Сложный','Сложное предложение','Укажите цифры, на месте которых нужны запятые.\nЯ понял (1) что поезд ушёл (2) и что (3) если я хочу успеть (4) придётся взять такси.','124',['1: начало придаточного «что поезд ушёл».','2: закрытие первого придаточного перед «и что» спорно: при однородном подчинении запятой нет.','3 и 4: границы вложенного придаточного условия.']],
[22,'Повышенный','Средства выразительности','Укажите средство выразительности: «Лес проснулся на рассвете».','олицетворение',['Лесу приписано человеческое действие «проснулся». Это олицетворение.']],
[25,'Средний','Лексическое значение','Как называется слово, близкое по значению к другому слову: «смелый — храбрый»?','синоним',['Слова одной части речи с близкими значениями — синонимы.']],
[27,'Эксперт','Сочинение по тексту','Напишите короткое сочинение-рассуждение на тему: «Почему человеку важно признавать ошибки?» Приведите позицию автора воображаемого текста, два поясняющих примера и собственное обоснование. Для реального №27 нужен исходный текст — здесь тренировочная схема.','Развёрнутый ответ',['Сначала сформулируй проблему и позицию автора.','Подбери два конкретных примера из одного исходного текста и поясни их.','Укажи и проанализируй смысловую связь между примерами.','Сформулируй собственное отношение и обоснуй его.','Сверяйся с актуальными критериями сочинения ФИПИ.']]
];
russian.forEach(function(z){add('russian',z[0],z[1],z[2],z[3],z[4],z[5],'russian',z[0]===27)});
const verifiedRus = originals.filter(t=>t.subject==='russian').length;
const MIXLEVELS={'all':null,'easy':['Базовый','Средний'],'medium':['Средний','Повышенный'],'hard':['Сложный','Эксперт']};
const mix = {subject:'both',level:'all',count:20,session:[],pos:0,show:false,feedback:'',score:0,attempted:new Set(),sourceMode:'varied'};
let mixStats={};try{mixStats=JSON.parse(localStorage.getItem('ege_mix_stats')||'{}')||{}}catch(e){}
function rank(t){return (t.level==='Эксперт'||t.level==='Сложный')?'hard':(t.level==='Повышенный'||t.level==='Средний')?'medium':'easy'}
function isRus(t){return t.subject==='russian'}
function shuffle(a){return a.slice().sort(()=>Math.random()-.5)}
function freshPool(){
 const b=bank.filter(t=>t.question&&t.steps&&t.steps.length&&t.answer&&t.subject);
 return [...originals,...b].filter(t=>(mix.subject==='both'||(mix.subject==='rus'?isRus(t):!isRus(t)))&&(mix.level==='all'||MIXLEVELS[mix.level].includes(t.level)));
}
function startMix(){
 let pool=freshPool(), chosen=[],used=new Set(),freq={}, group=mix.subject==='both'?['math','rus']:null;
 const priority=shuffle(originals.filter(t=>pool.includes(t))).concat(shuffle(pool.filter(t=>!t.id.startsWith('mix27-'))));
 for(let j=0;j<mix.count;j++){
   let target=group?group[j%2]:null;
   let opts=priority.filter(t=>!used.has(t.id)&&(!target||(target==='rus'?isRus(t):!isRus(t))));
   if(!opts.length)opts=priority.filter(t=>!used.has(t.id));if(!opts.length)break;
   opts.sort((a,b)=>(freq[a.number+'-'+a.subject]||0)-(freq[b.number+'-'+b.subject]||0)|| (a.id.startsWith('mix27-')?-1:1));
   let choice=opts[0];chosen.push(choice);used.add(choice.id);const k=choice.number+'-'+choice.subject;freq[k]=(freq[k]||0)+1;
 }
 mix.session=chosen;mix.pos=0;mix.show=false;mix.feedback='';mix.score=0;mix.attempted=new Set();
 try{localStorage.setItem('ege_mix_preferences',JSON.stringify({subject:mix.subject,level:mix.level,count:mix.count}))}catch(e){}
 drawMix();
}
function selectedMix(){return mix.session[mix.pos]}
function mixHTML(){
 const t=selectedMix(),c=mix.session.length;
 let links='<a href="https://fipi.ru/ege/otkrytyy-bank-zadaniy-ege" target="_blank" rel="noopener">Открытый банк ФИПИ ↗</a><a href="https://math-ege.sdamgia.ru/prob_catalog" target="_blank" rel="noopener">Решу ЕГЭ · математика ↗</a><a href="https://rus-ege.sdamgia.ru/prob_catalog" target="_blank" rel="noopener">Решу ЕГЭ · русский ↗</a>';
 let examples='<a href="https://math-ege.sdamgia.ru/problem?id=660768" target="_blank" rel="noopener">Реальная задача с параметром</a><a href="https://math-ege.sdamgia.ru/problem?id=641159" target="_blank" rel="noopener">Уравнение из ЕГЭ-2023</a><a href="https://rus-ege.sdamgia.ru/test?category_id=392&filter=all" target="_blank" rel="noopener">Русский · пунктуация №21</a>';
 return '<section class="mx-wrap"><div class="mx-top"><div><div class="mx-eyebrow">ЕГЭ HUB • ТРЕНАЖЁР 2027</div><h1>ЕГЭ-микс <em>⚡</em></h1><p>Решай разные прототипы подряд: русский + профиль, от простых задач до второй части.</p></div><div class="mx-mark">✓ Тренировка по проекту КИМ-2027</div></div>'+
 '<div class="mx-actions"><label>Предмет<select data-mix-pref="subject"><option value="both" '+(mix.subject==='both'?'selected':'')+'>Русский + математика</option><option value="math" '+(mix.subject==='math'?'selected':'')+'>Только профиль</option><option value="rus" '+(mix.subject==='rus'?'selected':'')+'>Только русский</option></select></label><label>Уровень<select data-mix-pref="level"><option value="all" '+(mix.level==='all'?'selected':'')+'>Все уровни</option><option value="easy" '+(mix.level==='easy'?'selected':'')+'>Лёгкие</option><option value="medium" '+(mix.level==='medium'?'selected':'')+'>Средние</option><option value="hard" '+(mix.level==='hard'?'selected':'')+'>Сложные / 2-я часть</option></select></label><label>Вопросов<select data-mix-pref="count">'+[10,20,30,50].map(v=>'<option value="'+v+'" '+(mix.count===v?'selected':'')+'>'+v+'</option>').join('')+'</select></label><button class="mx-primary" data-mix-new>↻ Новый набор</button></div>'+
 '<div class="mx-info">Внутри — авторские аналоги по формату ЕГЭ, а не копии чужих банков. К оригиналам ФИПИ и «Решу ЕГЭ» переходи по проверенным ссылкам ниже.</div>'+
 (t?'<div class="mx-session"><div class="mx-progress"><div><b>Задание '+(mix.pos+1)+' из '+c+'</b> <span>Верно: '+mix.score+' • Отвечено: '+mix.attempted.size+'</span></div><div class="mx-track"><i style="width:'+Math.round((mix.pos+1)/c*100)+'%"></i></div></div><div class="mx-task"><div class="mx-task-heading"><div><span class="mx-tag">'+(isRus(t)?'РУССКИЙ ЯЗЫК':'ПРОФИЛЬНАЯ МАТЕМАТИКА')+'</span><span class="mx-tag">№ '+t.number+'</span><span class="mx-tag mx-'+rank(t)+'">'+mEsc(t.level)+'</span></div><span class="mx-author">Авторский аналог</span></div><h2>'+mEsc(t.kind)+'</h2><div class="mx-question">'+mEsc(t.question)+'</div>'+
 '<div class="mx-answer"><label>'+(t.extended?'Реши в тетради и сравни с разбором':'Твой ответ')+'</label>'+(t.extended?'<p>Для развёрнутого задания автоматическая проверка недоступна. Открой решение и оцени оформление самостоятельно.</p>':'<input id="mx-input" placeholder="Введи ответ (для нескольких номеров — цифры без пробелов)" autocomplete="off"/>')+'<div class="mx-btns">'+(t.extended?'':'<button data-mix-check class="mx-primary">Проверить</button>')+'<button data-mix-show class="mx-secondary">'+(mix.show?'Скрыть решение':'Показать решение')+'</button><button data-mix-next class="mx-secondary">'+(mix.pos===c-1?'Начать новый набор':'Пропустить / дальше →')+'</button></div><div class="mx-feedback" id="mx-feedback">'+mix.feedback+'</div></div>'+
 (mix.show?'<div class="mx-solution"><h3>Разбор по шагам</h3><ol>'+t.steps.map(s=>'<li>'+mEsc(s)+'</li>').join('')+'</ol><strong>Ответ: '+mEsc(t.answer)+'</strong>'+(t.extended?'<div class="mx-btns"><button data-mix-self="1" class="mx-primary">✓ Сошлось</button><button data-mix-self="0" class="mx-secondary">✕ Не получилось</button></div>':'')+'</div>':'')+
 '<div class="mx-navigator"><button data-mix-prev '+(mix.pos===0?'disabled':'')+'>← Предыдущее</button><span>'+mix.session.slice(0,50).map((a,i)=>'<button data-mix-jump="'+i+'" class="'+(i===mix.pos?'on':'')+' '+(mix.attempted.has(a.id)?'done':'')+'">'+(i+1)+'</button>').join('')+'</span><button data-mix-next>Следующее →</button></div></div></div>':'<div class="mx-info">В этом фильтре нет задач. Измени сложность и начни новый набор.</div>')+
 '<div class="mx-sources"><h3>Реальные задания и официальные источники</h3><p>Открываются на сайтах правообладателей. Их условия не копируются автоматически в наш тренажёр.</p><div class="mx-sourcelinks">'+links+'</div><h4>Примеры для сложной тренировки</h4><div class="mx-sourcelinks">'+examples+'</div></div>'+
 '<p class="mx-tail">Дополнительно в основном каталоге ЕГЭ HUB остаются '+bank.length.toLocaleString('ru-RU')+' авторских упражнений. Результаты этого режима сохраняются в текущем браузере.</p></section>';
}
function drawMix(){if(S.view==='mix'){renderNav();document.querySelector('#breadcrumb').innerHTML='Рабочее место <span>›</span> <b>ЕГЭ-микс</b>';document.querySelector('#main').innerHTML=mixHTML();}}
const _render = render;
render=function(){if(S.view==='mix'){drawMix();}else _render();};
navs.splice(1,0,['mix','ЕГЭ-микс 2027']);icons.mix='⚡';
const _renderNav=renderNav;
renderNav=function(){_renderNav();const mobile=document.querySelector('#mobileDock');if(mobile && !mobile.querySelector('[data-go="mix"]'))mobile.insertAdjacentHTML('beforeend','<button data-go="mix" class="'+(S.view==='mix'?'active':'')+'"><i>⚡</i>Микс</button>');};
function norm(s){return String(s).toLowerCase().replaceAll('ё','е').replace(/[−–—]/g,'-').replace(/\s+/g,'').replace(/,/g,'.').replace(/[.;]$/,'');}
function sameAnswer(user,correct){if(norm(user)===norm(correct))return true;const asFraction=s=>{let v=norm(s);if(/^[+-]?\d+(\.\d+)?$/.test(v))return Number(v);if(/^[+-]?\d+\/\d+$/.test(v)){let z=v.split('/').map(Number);return z[1]?z[0]/z[1]:NaN;}return NaN;};let a=asFraction(user),b=asFraction(correct);return Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-9;}
function mark(good,t){mix.attempted.add(t.id);if(good)mix.score++;mixStats[t.id]={right:good,at:new Date().toISOString()};try{localStorage.setItem('ege_mix_stats',JSON.stringify(mixStats))}catch(e){}if(good){SET.done.add(t.id);SET.wrong.delete(t.id)}else SET.wrong.add(t.id);persist();}
document.addEventListener('click',function(e){
 if(S.view!=='mix')return;
 const b=e.target.closest('[data-mix-check],[data-mix-show],[data-mix-next],[data-mix-new],[data-mix-prev],[data-mix-jump],[data-mix-self]');if(!b)return;
 e.stopPropagation();const t=selectedMix(),d=b.dataset;
 if(d.mixNew!==undefined){startMix();return;}
 if(d.mixCheck!==undefined){const a=document.querySelector('#mx-input')?.value?.trim();if(!a){mix.feedback='<div class="mx-error">Введи ответ, затем нажми «Проверить».</div>';drawMix();return;}if(!mix.attempted.has(t.id)){const good=sameAnswer(a,t.answer);mark(good,t);mix.feedback=good?'<div class="mx-success">Верно! +1 к результату.</div>':'<div class="mx-error">Пока не сходится. Проверь ОДЗ, вычисления или открой решение.</div>';}else mix.feedback='<div class="mx-info">Ты уже ответил на это задание.</div>';drawMix();return;}
 if(d.mixShow!==undefined){mix.show=!mix.show;drawMix();return;}
 if(d.mixSelf!==undefined){if(!mix.attempted.has(t.id))mark(d.mixSelf==='1',t);mix.feedback=d.mixSelf==='1'?'<div class="mx-success">Отмечено как выполненное.</div>':'<div class="mx-error">Сохранено в списке ошибок.</div>';drawMix();return;}
 if(d.mixNext!==undefined){if(mix.pos===mix.session.length-1){startMix();return;}mix.pos++;mix.show=false;mix.feedback='';drawMix();return;}
 if(d.mixPrev!==undefined){mix.pos=Math.max(0,mix.pos-1);mix.show=false;mix.feedback='';drawMix();return;}
 if(d.mixJump!==undefined){mix.pos=+d.mixJump;mix.show=false;mix.feedback='';drawMix();return;}
});
document.addEventListener('change',function(e){const p=e.target.dataset.mixPref;if(!p||S.view!=='mix')return;mix[p]=p==='count'?Number(e.target.value):e.target.value;});
const css=String.raw;
const style=document.createElement('style');style.textContent=
'.mx-wrap{max-width:1200px;margin:0 auto;padding:28px 30px 65px;color:#1b2926}.mx-top{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:27px}.mx-eyebrow{font-size:11px;font-weight:800;letter-spacing:2px;color:#65776d}.mx-top h1{font-size:clamp(34px,5vw,58px);margin:6px 0;font-weight:850;letter-spacing:-2px}.mx-top h1 em{font-style:normal}.mx-top p{color:#697b77;margin:0;font-size:15px}.mx-mark{background:#ddf5bb;padding:12px 16px;border-radius:20px;font-weight:800;color:#2b4b2a;white-space:nowrap}.mx-actions{display:flex;align-items:end;flex-wrap:wrap;gap:12px;padding:20px;border:1px solid #e3e9e5;border-radius:19px;background:#fff}.mx-actions label{display:grid;gap:6px;color:#6e7a78;font-weight:700;font-size:12px;flex:1;min-width:140px}.mx-actions select{border:1px solid #e0e5e0;border-radius:11px;padding:11px;background:#f7f9f6;color:#17231f}.mx-primary,.mx-secondary{padding:12px 18px;border-radius:11px;font-weight:800;border:1px solid #cfdbcf;cursor:pointer}.mx-primary{color:#14251b;background:#bcf376;border-color:#bcf376}.mx-secondary{background:#fff;color:#17221f}.mx-primary:hover{background:#a8e760}.mx-info{margin:14px 0 18px;padding:12px 16px;background:#edf4ef;border-radius:13px;color:#4c6256}.mx-session{display:grid;grid-template-columns:minmax(0,1fr);gap:17px}.mx-progress{padding:18px 21px;border-radius:17px;background:#fff;border:1px solid #e2e8e4}.mx-progress>div:first-child{display:flex;justify-content:space-between;gap:15px}.mx-progress span{color:#667773}.mx-track{height:7px;background:#edf0ed;border-radius:99px;margin-top:13px}.mx-track i{display:block;height:100%;background:#94db67;border-radius:99px}.mx-task{padding:27px 30px;background:#fff;border:1px solid #e4e9e4;border-radius:20px}.mx-task-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.mx-tag{display:inline-block;background:#eff3ef;color:#455955;font-size:11px;font-weight:800;border-radius:40px;padding:6px 10px;margin:3px}.mx-tag.mx-hard{background:#fae0d9;color:#a34827}.mx-tag.mx-medium{background:#fcf1ce;color:#896b20}.mx-tag.mx-easy{background:#ddf6e4;color:#36734b}.mx-author{font-size:11px;color:#85918d}.mx-task h2{margin:18px 0;font-size:25px;line-height:1.2}.mx-question{white-space:pre-wrap;font-size:18px;line-height:1.8;padding:24px;background:#f7f9f6;border-radius:17px;overflow-wrap:anywhere}.mx-answer{padding-top:20px}.mx-answer label{font-weight:800;display:block;margin-bottom:8px}.mx-answer input{width:100%;max-width:510px;padding:15px 18px;border:1px solid #cad3ca;border-radius:12px;font-size:17px}.mx-answer p{color:#697973}.mx-btns{display:flex;gap:10px;flex-wrap:wrap;margin:15px 0}.mx-feedback:not(:empty){margin-top:11px}.mx-success{background:#d9f7e0;padding:12px;border-radius:12px;color:#276037}.mx-error{background:#fce5df;padding:12px;border-radius:12px;color:#8c3727}.mx-solution{background:#ecf3e8;padding:20px;border-radius:14px;margin-top:22px}.mx-solution h3{font-size:19px;margin:0}.mx-solution li{margin:10px 0;line-height:1.65}.mx-solution strong{font-size:16px}.mx-navigator{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:22px;flex-wrap:wrap}.mx-navigator>span{display:flex;gap:4px;flex-wrap:wrap;justify-content:center}.mx-navigator button{background:#f0f3ef;border:0;padding:8px;min-width:31px;border-radius:7px;cursor:pointer}.mx-navigator button.on{background:#baf177}.mx-navigator button.done{border:2px solid #86c78d}.mx-navigator button:disabled{opacity:.3}.mx-sources{margin-top:27px;padding:25px;border:1px solid #e4e9e4;background:#fff;border-radius:18px}.mx-sources h3{font-size:20px;margin:0 0 7px}.mx-sources h4{margin:24px 0 10px}.mx-sources p{color:#6b7b75}.mx-sourcelinks{display:flex;gap:8px;flex-wrap:wrap}.mx-sourcelinks a{background:#f0f5ef;padding:11px 13px;border-radius:11px;font-weight:750;text-decoration:underline}.mx-tail{color:#71827a;margin:22px 0;font-size:12px}@media(max-width:780px){.mx-wrap{padding:18px 14px 90px}.mx-top{display:block}.mx-mark{display:inline-block;margin-top:13px;white-space:normal}.mx-actions{padding:12px}.mx-actions label{min-width:125px}.mx-task{padding:16px}.mx-question{font-size:16px;padding:17px}.mx-task h2{font-size:22px}.mx-progress>div:first-child{display:grid}.mx-navigator>span{order:3;width:100%}}';
document.head.appendChild(style);
try{const prefs=JSON.parse(localStorage.getItem('ege_mix_preferences')||'{}');for(const key of ['subject','level','count'])if(prefs[key]!=null)mix[key]=prefs[key];}catch(e){}
bank.push(...originals);
startMix();
renderNav();
})();
