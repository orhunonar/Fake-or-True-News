import { context, PersistentVector } from "near-sdk-as";

@nearBindgen
export class CheckNews {
    text: string;
    approval: number;
    news:string

    constructor(news: string,text: string, approval: number) {
    this.text = text;
    this.approval = approval;
    this.news = news;
    
}

}

@nearBindgen
export class DailyNews {
    text: string;
   
 
constructor(text: string) {
    this.text = text;

}

}

export const message=new PersistentVector<CheckNews>("m");
export const dailyNews=new PersistentVector<DailyNews>("d");