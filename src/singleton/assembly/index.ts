import { Context } from 'near-sdk-as';
import {CheckNews,message,DailyNews,dailyNews} from './model';

//orhun.testnet kullanıcı adına sahip kişi dailynews'de haber oluşturacak
// herkes haberleri görebilecek
// herkes haberi onaylayabilir


export function createDailyNews():void{
   assert(Context.predecessor=="orhun.testnet","only orhun.testnet can create daily news");
   let text=  "Elon Musk is going to be the next president of the United States";
   dailyNews.push(new DailyNews(text));
    
  }
  
//get all news
export function getNews():string{
  let news="";
  for(let i=0;i<dailyNews.length;i++){
    news+=dailyNews[i].text+" ";
  }
  return news;
}

//get news by index
export function getNewsByIndex(index:i32):string{
  return dailyNews[index].text;
}


export function addMessage(text: string): void {
  

   assert((text=="true" || text=="fake"), "Message must be true or fake"); 
   if (checkMessage(text)) {
    message.push(new CheckNews(getNewsByIndex(0),text,1));
  } 
  else {
    message.push(new CheckNews(getNewsByIndex(0),text,-1)); 
  }
  }

//check if the message is fake or true
export function checkMessage(text: string): boolean {
  if (text=="true"){
    return true;
  }
  else{
    return false;
  }
}

//get all approvals
export function getApproval(): number {
    let approval: number = 0;
    for (let i = 0; i < message.length; i++) {
        approval = approval + message[i].approval;
    }
    return approval;
}


// get all messages
export function getAllMessages(): string {
    let msg = "";
    for (let i = 0; i < message.length; i++) {
      msg += message[i].text + " ";
    }
    return msg;
    }
