//Ensures typeSafety, clearer, and error-free environemnt variable handling
//Browser selection, Environment selection, Base URL selection,Headless mode selection

export{};
declare global{
    namespace NodeJS{
        interface ENV{
            BROWSER:"chrome"|"firefox"|"webkit",
            ENV:"staging"|"prod"|"test",
            BASEURL: string,
            HEAD:"true"|"false",
        }
}
}


 