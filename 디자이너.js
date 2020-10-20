importClass(org.jsoup.Jsoup);
let Pathnote = JSON.parse(Jsoup.connect("https://nimbus.ubisoft.com/api/updates/items?categoriesFilter=patch-notes&limit=6&mediaFilter=all&skip=0&startIndex=undefined&tags=BR-rainbow-six%20GA-siege&locale=ko-kr&fallbackLocale=en-gb").header('Authorization', "3u0FfSBUaTSew-2NVfAOSYWevVQHWtY9q3VM8Xx9Lto").ignoreContentType(true).get().text());
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith("!패치노트")) {
    switch (msg.substring(6)) {
      case String(1):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      case String(2):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      case String(3):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      case String(4):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      case String(5):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      case String(6):
        replier.reply(Pathnote2(msg.substring(6) - 1));
        break;
      default:
        replier.reply("패치노트\n\n(1)" + Pathnote.items[0].title + "\n(2)" + Pathnote.items[1].title + "\n(3)" + Pathnote.items[2].title + "\n(4)" + Pathnote.items[3].title + "\n(5)" + Pathnote.items[4].title + "\n(6)" + Pathnote.items[5].title);
    }
  }
}
function Pathnote2(msg) {
  return "제목 : " + this.Pathnote.items[msg].title + "\n\n본문 : " + this.Pathnote.items[msg].content;
}
