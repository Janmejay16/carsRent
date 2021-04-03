/*
Roles :
    - User
    - Vehicle Owner
    - Form for Enquiry

Fields :
    - User :
        > Name
        > Mobile
        > Email
        > Password
        > Address

    - Vehicle Owner :
        > Name
        > Mobile
        > Email
        > Password
        > Address
        > Model Name
        > Rent Per Day
        > Seats
        > Mileage
        > Fuel Type
        > Car Type
        > Location
        > Vehicle Image
        > License Image
        > RC Document
        > Insurance Document
    
    - Form for Enquiry :
        > Name
        > Model Name
        > Car Type
        > Seats
        > Days Required
        > Date Time (from)
        > Date Time (to)
    
Features :
    - User :
        > Edit Profile
        > Send Request for vehicle
        > Notifications for the enquiries sent
        > Pay Bill

    - Vehicle Owner :
        > Edit Profile
        > Notifications for vehicle enquiries
        > Accept/Decline enquiries
*/


/*
---------------------------------------------------
DATABASE SCHEMA :
---------------------------------------------------
Tables : 
    - User
        >> Id [not null, primary key, unique, integer]
        >> Name [not null, text]
        >> Email [not null, text]
        >> Mobile [not null, text]
        >> Password [not null, text]

    - VehicleOwner>> Id [not null, primary key, unique, integer]
        >> Name [not null, text]
        >> Email [not null, text]
        >> Mobile [not null, text]
        >> Password [not null, text]
        
        >> Model Name [not null, text]
        >> Rent Per Day [not null, integer]
        >> Seats [not null, integer]
        >> Mileage [not null, integer]
        >> Fuel Type [not null, text]
        >> Car Type [not null, text]
        >> Location [not null, text]
        >> Vehicle Image [not null, blob]
        >> License Image [not null, blob]
        >> RC Document [not null, blob]
        >> Insurance Document [not null, blob]

    - Notifications
        >> Id [not null, primary key, unique, integer]
        >> Id_to [not null, integer]
        >> Id_from [not null, integer]
        >> description [not null, text]
        >> type [not null, text]

    - Enquiries
        >> Date_time_from [not null, datetime]
        >> Date_time_till [not null, datetime]
        >> Days_Required [not null, integer]
        >> Owner_Id [not null, integer]
        >> User_Id [not null, integer]
*/