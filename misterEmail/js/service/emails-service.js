import utilService from "./util-service.js";


var emailsDB = [
    {
        id: 'ndalkngalkn',
        from: 'Netflix',
        subject: 'Better Call Saul release date',
        body: `
        Will there be another season of Better Call Saul?
        Its good news - Better Call Saul has already been renewed for a fifth season
        at AMC and Netflix Season four’s quietly stunning finale aired last Monday (October 8)
        in the US and dropped on Netflix UK on Tuesday on October 9.
        The Breaking Bad spin-off was renewed for a fifth season back in August.`,
        isRead: false,
        sentAt: 1541596432631,
    },
    {
        id: 'ndaegq3rc',
        from: 'Slack',
        subject: 'Notifications from the Coding Academy',
        body: `
        Hi Ron, You have a new mention from the 
        Coding Academy Sep 2018 workspace (ca-sep18.slack.com).`,                     
        isRead: true,
        sentAt: 1541683064730,
    },
    {
        id: 'ndaegqt3q3',
        from: 'mySupermarket',
        subject: 'הזמנתך הועברה לרשת השיווק',
        body: `
        שלום רון,
        תודה שקנית ב mySupermarket.
        חסכת היום :2080.20
        הזמנתך הועברה ל יינות ביתן 
        כעת עליך להשלים את הקניה באתר יינות ביתן.
        לאחר שתסיים את הקניה באתר של יינות ביתן
         תקבל מהם הודעת דוא"ל המאשרת את השלמת ההזמנה .
        יש לעבור על הרשימת המוצרים באתר הרשת. המחירים
         הקובעים הם אלא שתאשר בסיום הקניה באתר הרשת. 
        סל הקניות שלך כולל 32 מוצרים:
        `,
        isRead: false,
        sentAt: 1541596432681
    },
    {
        id: 'cdaegqt3q3',
        from: 'MyBills.co.il',
        subject: 'אישור תשלום',
        body: `
        תודה על הבחירה ב- mybills.co.il לביצוע תשלומיך.
        מצ"ב אישור התשלום.
        לידיעתך, המערכת מאפשרת צפייה בהיסטוריית התשלומים
         למשתמשים רשומים באמצעות בחירה בכפתור "חשבונות ששולמו" בתפריט העליון.
        `,
        isRead: false,
        sentAt: 1541596432681
    },
    {
        id: 'abaegqt3q3',
        from: 'Microsoft',
        subject: 'Microsoft account password reset',
        body: 'Please use this code to reset the password for the Microsoft account',
        isRead: false,
        sentAt: 1541596432681
    },
]


function query() {
    return new Promise((resolve, reject)=>{
        // setTimeout(()=>{
            resolve(emailsDB);
        // }, 1000)
    });
}

function save(emailData) {
    console.log(emailData);
    emailData.id = utilService.makeId();
    emailData.isRead = false;
    emailsDB.push(emailData);
    return Promise.resolve(emailData);
}

function deleteEmail(emailId){
    var emailIdx = emailsDB.findIndex(email => email.id === emailId)
    emailsDB.splice(emailIdx,1);
}

function getEmailById(emailId) {
    var theEmail = emailsDB.find(email => email.id === emailId);
    return Promise.resolve(theEmail)
}

function nextEmail(emailId) {
    const emailIdx = emailsDB.findIndex(email => email.id === emailId);
    const email = (emailsDB[emailIdx+1])? emailsDB[emailIdx+1] : emailsDB[0]
    
    return Promise.resolve(email)
    
}

function updateIsRead(emailId) {
    const email = emailsDB.find(email => email.id === emailId);
    email.isRead = true;
    
}

export default {
    deleteEmail,
    query,
    save,
    getEmailById,
    nextEmail,
    updateIsRead,
}
