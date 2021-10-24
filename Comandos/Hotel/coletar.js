module.exports = {
  name: "coletar",
  aliases: ["colect-hotel"],
  code: `
  $editIn[3s;Você coletou $get[coletar] de diária de seus hóspedes]
  Coletando a diária dos $getGlobalUserVar[quartos;$authorID] Hóspedes

  $setGlobalUserVar[téocoins;$sum[$getGlobalUserVar[téocoins;$authorID];$get[coletar]];$authorID]
  $let[coletar;$multi[100;$getGlobalUserVar[quartos;$authorID]]]

  $globalCooldown[$sub[24;$getGlobalUserVar[funcionarios]]h;<:errado:895110700500934667> » **$username**, aguarde ***\`[ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12h;globalUser;daily;$authorID];minutes;Minutos];seconds;Segundos];hours;Horas];and;e];second;Segundo] ]\`*** para coletar a diária dos seus Hóspedes novamente!]
  `
}