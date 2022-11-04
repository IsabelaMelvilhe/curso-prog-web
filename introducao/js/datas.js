 //Cria uma nova dara através da classe Date
 var data = new Date()
 console.log(data)
 
 //Retorna dia da semana (0-6)
 var diaDaSemana = data.getDay()
 console.log(diaDaSemana)

 //Retorna o dia do mes(1-31)
 var dia = data.getDate()
 console.log(dia)

 //Retorna o mes (0-11)
 var mes = data.getMonth()
 console.log(mes)

 //Retornar o ano com 4 digitos
 var ano = data.getFullYear()
 console.log(ano)

 //Retorna a data em milisegundos
 var timeStamp = data.getTime()
 console.log(timeStamp)

 //Retorna a data/hora no formato brasileiro
 var dataHoraPtBr = data.toLocaleDateString("pt-br")
 console.log(dataHoraPtBr)

 //Retorna apenas a data no formato brasileiro
 var dataPtBr = data.toLocaleDateString("pt-br")
 console.log(dataPtBr)

 //Usando o parametro options para formatação da data
 const options = {
     year: 'numeric',
     month: 'long',
     weekday:'long',
     day:'numeric',
     hour:'numeric',
     minute:'numeric',
     second:'numeric',
     era:'long',
     timeZoneName:'long',
     timeZone: 'America/Sao_Paulo',
     hour12: false
 }

 var dataFormatada = data.toLocaleDateString("pt-br", options)
 console.log(dataFormatada)