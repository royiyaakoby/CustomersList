//jshint esversion:6
// const eng = {
//   heading: {
//     list: "List",
//     new: "New",
//     logOut: "Logout",
//     searchCustomer: "Search Customer",
//     searchBy: "Search By:",
//     phoneNumber: "Phone Number",
//     firstName: "First Name",
//     lastName: "Last Name",
//     email: "Email"
//   },
//   customer: {
//     customerName: "Customer Name",
//     customerID: "Customer ID",
//     firstName: "First Name",
//     lastName: "Last Name",
//     phoneNumber: "Phone Number",
//     email: "Email",
//     birthDay: "Birth Date",
//     remark: "Remarks"
//   },
//   titles: {
//     customers: "Customers",
//     enter: "See Profile",
//     save: "Save",
//     editCard: "Edit Customer",
//     editmeeting: "Edit Meeting",
//     addNewMeeting: "Add New Meeting",
//     enterMeeting: "Save Meeting",
//     delete: "Delete",
//     cancel: 'Cancel'
//   }
// };
//
// const heb = {
//   heading: {
//     list: "רישמה",
//     new: "חדש",
//     logOut: "יציאה",
//     searchCustomer: "חפש לקוח",
//     searchBy: "חפש לפי:",
//     phoneNumber: "מספר טלפון",
//     firstName: "שם",
//     lastName: "שם משפחה",
//     email: "אימייל"
//   },
//   customer: {
//     customerName: "שם לקוח",
//     customerID: "מספר לקוח",
//     firstName: "שם",
//     lastName: "שם משפחה",
//     phoneNumber: "מספר טלפון",
//     email: "אימייל",
//     birthDay: "תאריך לידה",
//     remark: "הערות"
//   },
//   titles: {
//     customers: "לקוחות",
//     enter: "צפה בלקוח",
//     save: "שמור",
//     editCard: "ערוך לקוח",
//     editmeeting: "ערוך פגישה",
//     addNewMeeting: "הוסף פגישה חדשה",
//     enterMeeting: "שמור פגישה",
//     delete: "מחק",
//     cancel: 'ביטול'
//   }
// };





function leng(userLeng){
let leng = {};
  if (userLeng === "heb") {
    leng = {
      manuClass: "ml-auto",
      css: "style-heb",
      dir : "rtl",
      lang : "heb",
      heading: {
        list: "לקוחות",
        new: "חדש",
        logOut: "יציאה",
        searchCustomer: "חפש לקוח",
        searchBy: "חפש לפי:",
        phoneNumber: "מספר טלפון",
        firstName: "שם",
        lastName: "שם משפחה",
        email: "אימייל"
      },
      customer: {
        customerName: "שם לקוח",
        customerID: "מספר לקוח",
        firstName: "שם",
        lastName: "שם משפחה",
        phoneNumber: "מספר טלפון",
        email: "אימייל",
        birthDay: "תאריך לידה",
        remark: "הערות"
      },
      titles: {
        customers: "לקוחות",
        enter:"צפה בפרטי לקוח",
        save: "שמור",
        editCard:" ערוך פרטי לקוח",
        editmeeting: "ערוך פגישה",
        addNewCustomer: "הוסף לקוח חדש",
        addNewMeeting: "הוסף פגישה חדשה",
        enterMeeting: "שמור פגישה",
        meetingSubject: "נושא פגישה",
        meetingDate : "תאריך",
        meetingBody: "תאור הפגישה",
        addLink: "הוסף לינק",
          linkName: "שם הלינק:",
        linkLink: "העתק לינק כאן:",
        delete: "מחק",
        cancel: 'ביטול',
          aresure : "אשר מחיקה"
      }
    };
    return leng;
  } else {
    leng =  {
      manuClass: "mr-auto",
      css: "style-eng",
      dir : "ltr",
      lang : "en",
      heading: {
        list: "List",
        new: "New",
        logOut: "Logout",
        searchCustomer: "Search Customer",
        searchBy: "Search By:",
        phoneNumber: "Phone Number",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email"
      },
      customer: {
        customerName: "Customer Name",
        customerID: "Customer ID",
        firstName: "First Name",
        lastName: "Last Name",
        phoneNumber: "Phone Number",
        email: "Email",
        birthDay: "Birth Date",
        remark: "Remarks"
      },
      titles: {
        customers: "Customers",
        enter: "See Profile",
        save: "Save",
        editCard: "Edit Customer",
        editmeeting: "Edit Meeting",
          addNewCustomer: "A New Customer",
        addNewMeeting: "Add New Meeting",
        enterMeeting: "Save Meeting",
        meetingSubject: "Title",
        meetingDate : "Date",
        meetingBody: "Subject",
        addLink: "Add Link",
        linkName: "Link name:",
        linkLink: "Paste link here:",
        delete: "Delete",
        cancel: 'Cancel',
        aresure : "Are You Sure?"
      }
    };
        return leng;
  }

}

module.exports = {
  leng
    // eng,
    // heb
};
