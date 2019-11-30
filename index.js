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

app.hears(['O que significa MP ?', 'MP', 'mp', 'O que é MP', 'o q e mp'], ctx => {
    return ctx.reply('Significa medida provisória');
});

app.hears(['O que significa Tributos ?', 'Tributos', 'tributo', 'O que são Tributos','o que são tributos', 'o q são tributos'], ctx => {
    return ctx.reply('Tributo é tudo aquilo que o governo arrecada para si para que possa prestar serviços públicos essenciais aos seus cidadãos, como educação, saúde, segurança, entre outros. Esta arrecadação ocorre por meio de alguns tipos de cobranças que o Estado tem o direito de fazer sobre seus cidadãos, como Imposto de Renda, INSS, IPTU, IPVA, Imposto sobre Importação, entre muitos outros');
});


app.hears(['O que significa Utilitarismo  ?', 'Utilitarismo ', 'utilitarismo ', 'O que é Utilitarismo ', 'o q e utilitarismo '], ctx => {
    return ctx.reply('Utilitarismo é uma teoria filosófica que consiste na ideia de que uma ação só pode ser considerada moralmente correta se as suas consequências promoverem o bem-estar coletivo. Caso o resultado da ação seja negativo para a maioria, esta é classificada como condenável moralmente');
});


app.hears(['O que significa Subdesenvolvido ?', 'Subdesenvolvido', 'subdesenvolvido', 'O que quer dizer Subdesenvolvido'], ctx => {
    return ctx.reply('Subdesenvolvido é um termo que é usado com frequência em Economia para definir a baixa renda de um país. Em geral é incluído nesse significado a falta de acesso da população de um país ou região às oportunidades de emprego, saúde, água, alimentação, educação e moradia.');
});


app.hears(['O que significa Sindicalismo ?', 'Sindicalismo', 'sindicalismo', 'O que é Sindicalimso', 'o q e sindicalismo'], ctx => {
    return ctx.reply('Sindicalismo é o movimento e o sistema que permite a representação dos operários através de uma instituição conhecida como sindicato, organização que reúne os trabalhadores para a defesa dos seus interesses.');
});

app.hears(['O que significa Proletário?', 'Proletário', 'proletário', 'O que é Proletário', 'o q e proletario'], ctx => {
    return ctx.reply('é o indivíduo que se caracteriza pela sua condição permanente de assalariado e pelos seus modos de vida e atitudes decorrentes de tal situação, pertence a classe dos operários.');
});

app.hears(['O que significa Marxismo?', 'Marxismo', 'marxismo', 'O que é Marxismo', 'o q e mmarxismo'], ctx => {
    return ctx.reply('O marxismo é uma corrente de pensamento, criada por Karl Marx e Friedrich Engels. Para eles, em todas as épocas da história a sociedade foi marcada por uma luta de classes, sendo essa relação caracterizada pelo antagonismo entre uma classe opressora e uma oprimida. Na sociedade capitalista, essas classes são representadas respectivamente pela burguesia, que detém os meios de produção e por consequência boa parte da riqueza gerada, e o proletariado, que nada possui além da própria mão de obra, vendida como mercadoria ao proprietário do capital.');
});

app.hears(['O que significa Meritocracia?', 'Meritocracia', 'meritocracia', 'O que é Meritocracia', 'o q e meritocracia'], ctx => {
    return ctx.reply('A meritocracia é um modelo de distribuição de recursos, prêmios ou vantagens, cujo critério único a ser considerado é o desempenho e as aptidões individuais de cada pessoa');
});

app.hears(['O que significa Foro Privilegiado?', 'Foro Privilegiado', 'foro privilegiado', 'O que é Foro Privilegiado', 'o q e foro privilegiado'], ctx => {
    return ctx.reply('O Foro Privilegiado é um mecanismo pelo qual se altera a competência penal sobre ações contra certas autoridades públicas. Ou seja, uma ação penal contra uma autoridade pública é julgada por tribunais superiores, diferentemente de um cidadão comum, julgado pela justiça comum.');
});

app.hears(['O que significa Direita?', 'Direita', 'direita', 'O que é Direita', 'o q e direita'], ctx => {
    return ctx.reply('Direita é uma palavra usada para representar um posicionamento político, partidário e ideológico. Quando uma pessoa se identifica com a ideologia política de direita ela costuma dar prioridade aos direitos individuais em relação aos direitos coletivos. Também é comum que considere valores religiosos e tradicionais como fundamentais para a sociedade.');
});

app.hears(['O que significa Demagogia?', 'Demagogia', 'demagogia', 'O que é Demagogia', 'o q e demagogia'], ctx => {
    return ctx.reply('Demagogia é um termo de origem grega que significa "arte ou poder de conduzir o povo". É uma forma de atuação política na qual existe um claro interesse em manipular ou agradar a massa popular, incluindo promessas que muito provavelmente não serão realizadas, visando apenas à conquista do poder político e ou outras vantagens correlacionadas.');
});

app.hears(['O que significa Nepotismo?', 'Nepotismo', 'nepotismo', 'O que é Nepotismo', 'o q e nepotismo'], ctx => {
    return ctx.reply(' o termo nepotismo refere-se a nomeação, contratação ou favorecimento de familiares por parte de um agente público.');
});

app.hears(['O que significa Eligibilidade?', 'Eligibilidade', 'eligibilidade', 'O que é Eligibilidade', 'o q e eligibilidade'], ctx => {
    return ctx.reply('Elegibilidade é a capacidade que os cidadãos têm de serem eleitos, de serem pessoas elegíveis de acordo com as condições permitidas pela legislação.');
});

app.hears(['O que significa Esquerda?', 'Esquerda', 'esquerda', 'O que é Esquerda', 'o q e esquerda'], ctx => {
    return ctx.reply('Os posicionamentos de esquerda valorizam os indivíduos altruístas e dispostos a se conformar à coletividade. A sociedade deve oferecer segurança social aos indivíduos, independentemente de sua condição ou ações. Promove a igualdade social, opondo-se a qualquer tipo de desigualdade considerada injusta, principalmente as desigualdades econômicas. ');
});

app.hears(['O que significa Lavagem de dinheiro?', 'Lavagem de dinheiro', 'lavagem de dinheiro', 'O que é Lavagem de dinheiro', 'o q e lavagem de dinheiro'], ctx => {
    return ctx.reply('É o processo de ocultar a origem, o dono ou o destino do dinheiro obtido ilegalmente ao escondê-lo dentro de atividades econômicas legítimas para fazê-lo parecer legal. ');
});

app.hears(['Constituição','constituicao', 'O que é constituição?', 'o q e constituicao'], ctx => {
    return ctx.reply('Uma constituição é um conjunto base de leis, normas e regras de um país e é ela que regula e organiza todas as possíveis atuações do Estado perante sua população, interna e externamente. A constituição é a lei máxima que apresenta os limites do poder do governo e descreve os deveres e direitos de cada cidadão.');
});

app.hears(['CPMF','cpmf','O que é CPMF?','o q e cpmf'], ctx => {
    return ctx.reply('CPMF significa Contribuição Provisória sobre Movimentação Financeira, é um imposto cobrado por todas as movimentações financeiras feitas por pessoas jurídicas e físicas.');
});

app.hears(['Descentralização', 'descentralizacao', 'O que é descentralização?','o q e descentralizacao', 'O que e descentralização'], ctx => {
    return ctx.reply('A descentralização caracteriza-se quando um poder antes absoluto, passa a ser repartido.');
});

app.hears(['Ditadura','ditadura','O que é ditadura?','o que é ditadura?','o q e ditadura?'], ctx => {
    return ctx.reply('Ditadura é um regime governamental no qual todos os poderes do Estado estão concentrados em um indivíduo, um grupo ou um partido.');
});

app.hears(['Dívida pública','Divida publica','divida publica','O que é dívida pública?','o q e divida publica'], ctx => {
    return ctx.reply('A Dívida Pública Federal (DPF) é a dívida contraída pelo Tesouro Nacional para financiar o déficit orçamentário do Governo Federal');
});

app.hears(['Elite','elite','O que é elite?','o que e elite?', 'O que e elite?'], ctx => {
    return ctx.reply('Elite é um grupo de pessoas com grande influência ou poder de decisão sobre o governo e sobre a vida cultural de uma sociedade.');
});

app.hears(['Emenda constitucional','emenda constitucional','O que é emenda constitucional', 'o que e emenda constitucional'], ctx => {
    return ctx.reply('Uma emenda constitucional é uma modificação da constituição de um Estado, resultando em mudanças pontuais do texto constitucional.');
});

app.hears(['Empréstimo compusório','emprestimo compusorio','O que é empréstimo compusório','o q e emprestimo compusorio'], ctx => {
    return ctx.reply('É um empréstimo obrigatório, onde o cidadão será obrigado a emprestar dinheiro para o Poder Público, mas em contrapartida a devolução deste valor é garantida pelo próprio Governo.');
});

app.hears(['Patrimonialismo','patrimonialismo','O que é patrimonialismo?','o q e patrimonialismo'], ctx => {
    return ctx.reply('Patrimonialismo é a característica de um Estado que não possui distinções entre os limites do público e os limites do privado.');
});

app.hears(['PEC','Pec','pec','O que é PEC?','o que e pec?','O que significa PEC?', 'Qual o significado de PEC?'], ctx => {
    return ctx.reply('Proposta de Emenda à Constituição (PEC) é uma atualização, um emendo à Constituição Federal.');
});

app.hears(['PL','pl','Projeto de lei','projeto de lei','O que é PL?','O que é pl?','O que é um projeto de lei?'], ctx => {
    return ctx.reply('Um projeto de lei é um tipo de proposta normativa submetida à deliberação de um órgão legislativo, com o objetivo de produzir uma lei.');
});

app.hears(['O que é plebiscito?','plebiscito','Plebiscito'], ctx => {
    return ctx.reply('Pebiscito é uma consulta popular convocada antes da criação da lei.');
});

app.hears(['Politica cambial', 'politica cambial','O que é política cambial?', 'o que e politica cambial?'], ctx => {
    return ctx.reply('A política cambial é um conjunto de medidas que um país adota em sua moeda, visando controlar sua relação com as moedas estrangeiras.');
});

app.hears(['Presidencialismo','presidencialismo', 'O que é presidencialismo?', 'o que e presidencialismo?'], ctx => {
    return ctx.reply('Presidencialismo é um sistema de governo em que um chefe de governo também é o chefe de Estado e lidera o poder executivo, que é separado do poder legislativo e do poder judiciário.');
});

app.hears(['Radicalismo','radicalismo','O que é radicalismo?','o que e radicalismo'], ctx => {
    return ctx.reply('Radicalismo é uma doutrina que prega o uso de ações revolucionárias visando à transformação da sociedade.');
});


app.startPolling(30);
