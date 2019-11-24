const Telegraf = require('telegraf');
require('dotenv').config();
const app = new Telegraf(process.env.BOT_TOKEN);

app.start(ctx => {
    ctx.reply('Bem vindx ! ' +  "\n" + 'Eu sou o politiquês e meu objetivo é te explicar termos da politica brasileira que você ainda não saiba o significado');
});

app.hears('hi', ctx => {
    return ctx.reply('Teste!');
});

app.hears(['O que é anarquismo?','O que e anarquismo','o q e anarquismo','anarquismo','Anarquismo'], ctx => {
    return ctx.reply('Anarquismo é uma teoria e ideologia política que não acredita em nenhuma forma de dominação ou hierarquia e prega a cultura da autogestão e coletividade.');
});

app.hears(['O que é antissemitismo', 'o que e antissemitismo', 'o q e antissemitismo', 'o que é antisemitismo','antissemitismo', 'Antissemitismo', 'Antisemitismo'], ctx => {
    return ctx.reply('Antissemitismo é o ódio generalizado ao povo judeu.');
});

app.hears(['Assembleia constituinte', 'O que é assembléia constituinte?', 'o que e assembleia constituinte'], ctx => {
    return ctx.reply('Assembléia constituinte o órgão responsável pela elaboração da Constituição de um país, dando início a um novo ordenamento jurídico.');
});

app.hears(['O que é burocracia', 'burocracia', 'Burocracia', 'o q e burocracia'], ctx => {
    return ctx.reply('Burocracia é uma forma de organização ou estrutura organizativa caracterizada por regras e procedimentos explícitos e regularizados, divisão de responsabilidades e especialização do trabalho, hierarquia e relações impessoais.');
});

app.hears(['Chefe de estado', 'O que é um chefe de estado?', 'O que é chefe de estado', 'o q e chefe de estado?'], ctx => {
    return ctx.reply('Chefe de estado é uma figura protocolar sem poderes administrativos com o papel de representar o país de forma cerimonial em festas e outros eventos para autoridades ou mesmo em programas humanitários.');
});

app.hears(['Chefe de governo', 'O que é um chefe de governo?', 'O que é chefe de governo', 'o q e chefe de governo?'], ctx => {
    return ctx.reply('Chefe de governo é um papel de liderança e de formulação de políticas públicas, econômicas e sociais, manutenção do funcionamento dos poderes executivo e legislativo, diálogo entre os partidos, atores institucionais, Chefe de Estado e população.');
});

app.hears(['classes sociais', 'O que são classes sociais?', 'o que sao classes sociais?', 'O q sao classes sociais'], ctx => {
    return ctx.reply('Classes sociais são grupos de pessoas com padrões culturais, políticos e econômicos semelhantes. O fator financeiro é um dos maiores divisores de classes sociais.');
});

app.hears(['O que é coligação partidária?', 'coligacao partidaria','coligação partidária', 'o que e coligacao partidaria'], ctx => {
    return ctx.reply('Coligação partidária é a união de partidos para ganhar força nas eleições e isso faz com que votos de partidos diferentes (dentro de uma coligação) sejam contabilizados juntos.');
});

app.hears(['O que é CPI?', 'O que é comissão parlamentar de inquérito?','o que e comissao parlamentar de inquerito','o que e CPI', 'CPI', 'cpi', 'comissao parlamentar de inquerito'], ctx => {
    return ctx.reply('CPI (Comissão parlamentar de inquérito) é uma comissão temporária formada no Poder Legislativo para investigar uma denúncia de irregularidade ou acontecimentos que sejam importantes para questões de ordem constitucional, legal, econômica ou social');
});

app.hears(['O que é comunismo?','comunismo','o que e comunismo', 'o q e comunismo'], ctx => {
    return ctx.reply('Comunismo é uma ideologia política e socioeconômica que pretende estabelecer uma sociedade igualitária, através da abolição da propriedade privada, das classes sociais e do próprio Estado.');
});

app.hears(['O que é conservadorismo?','conservadorismo','Conservadorismo','o que e conservadorismo','o q e conservadorismo', 'O que é pensamento conservador?', 'o que e pensamento conservador'], ctx => {
    return ctx.reply('Conservadorismo ou pensamento conservador é um pensamento político que defende a manutenção das instituições sociais tradicionais – como a família, a comunidade local e a religião -, além dos usos, costumes, tradições e convenções. O conservadorismo enfatiza a continuidade e a estabilidade das instituições, opondo-se a qualquer tipo de movimentos revolucionários e de políticas progressistas.');
});

app.hears(['O que é progressismo?','Progressismo','progressismo', 'o que e progressismo'], ctx => {
    return ctx.reply('Progressismo é um conjunto de doutrinas filosóficas, éticas e econômicas baseado na ideia de que o progresso, entendido como avanço científico, tecnológico, econômico e social, é vital para o aperfeiçoamento da condição humana');
});

app.hears(['O que é reforma protestante?','Reforma protestante','reforma protestante','o que e reforma protestante'], ctx => {
    return ctx.reply('Reforma Protestante foi um movimento reformista cristão culminado no início do século XVI por Martinho Lutero que protestou contra diversos pontos da doutrina da Igreja Católica Romana, propondo uma reforma no catolicismo romano.');
});

app.hears(['O que é reformismo?','Reformismo', 'o que e reformismo'], ctx => {
    return ctx.reply('Reformismo é um movimento social que tem em vista a transformação da sociedade mediante a introdução de reformas graduais e sucessivas na legislação e nas instituições já existentes a fim de torná-las mais igualitárias.');
});

app.hears(['O que é regime politico?','o que e regime politico', 'regime politico','Regime politico'], ctx => {
    return ctx.reply('São conjuntos de instituições políticas por meio das quais um Estado se organiza de maneira a exercer o seu poder sobre a sociedade.');
});

app.hears(['O que é revisionismo?','Revisionismo','revisionismo','o que e revisionismo'], ctx => {
    return ctx.reply('Revisionismo é o ato de se reanalisar algo, gerando modificações em relação à interpretação original que se tinha do objeto analisado.');
});

app.hears(['O que é socialismo?','socialismo','Socialismo','o que socialismo'], ctx => {
    return ctx.reply('Socialismo é um sistema político e econômico baseado na igualdade. O socialismo propõe a distribuição igualitária de renda, extinção da propriedade privada, socialização dos meios de produção, economia planificada e a tomada do poder por parte do proletariado.');
});


app.hears([], ctx => {
    return ctx.reply('');
});

app.hears(['O que significa é MP ?', 'MP', 'mp', 'O que é MP', 'o q e mp'], ctx => {
    return ctx.reply('Significa medida provisória');
});

app.startPolling(30);
