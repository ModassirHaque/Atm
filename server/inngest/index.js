import { Inngest } from "inngest";
import User from "../model/User.js";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//Ingest function to save user data to a database
const syncUserCreation=inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {event:'clekr/user.created'},
    async ({event})=>{
       const {id,first_name,last_name,email_address,image_url}=event.data;
       const userData={
        _id:id,
        email:email_address[0].email_address,
        name: first_name +" "+last_name,
        image:image_url,
       }
       await User.create(userData);
    }

)
//Ingest function to deleted user from database
const syncUserDeletion=inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {event:'clerk/User.deleted'},
    async ({event})=>{
        const {id}=event.data;
        await User.findByIdAndDelete(id);   
    }
)
//Inngest function to update the user data in database
const synceUserUpdate=inngest.createFunction(
    {id:'update-user-from-clerk'},
    {event:'clerk/user.updated'},
    async ({event})=>{
       const {id,first_name,last_name,email_address,image_url}=event.data;
       const userData={
        _id:id,
        email:email_address[0].email_address,
        name:first_name+" "+last_name,
        image:image_url,
       }
       await User.findByIdAndUpdate(id,userData);
    }
)
// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    synceUserUpdate
];
