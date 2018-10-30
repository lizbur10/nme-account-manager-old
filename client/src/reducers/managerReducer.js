const initialState = 
    [
        {
            id: 1,
            active: true,
            market: {
            id: 1,
            name: "Albany",
            created_at: "2018-09-30T14:29:47.131Z",
            updated_at: "2018-09-30T14:29:47.131Z"
            },
            name: "Tyler",
            email: "tyler@9mileseast.com",
            phone: null,
            username: "tyler",
            password: "password",
            workplace_accounts: [
                {
                id: 3,
                active: true,
                manager_id: 1,
                company_name: "Springfield Nuclear Power Plant",
                company_address: "1 Ground Zero Rd",
                company_city: "Springfield",
                company_zip_code: null,
                ctct_email_list: "Springfield Nukes",
                scheduling_contact_name: "Mr. Burns",
                scheduling_contact_phone: "555-1000",
                scheduling_contact_email: "brburns@springfieldnukes.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "monday",
                delivery_time: "10:00-10:30",
                special_instructions: "The key is under the mat"
            },
            {
                id: 7,
                active: false,
                manager_id: 1,
                company_name: "Fake Co",
                company_address: "1 Fake Way",
                company_city: "Cambridge",
                company_zip_code: null,
                ctct_email_list: "Fake Co",
                scheduling_contact_name: "Joe",
                scheduling_contact_phone: null,
                scheduling_contact_email: "Joe@fakeco.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "tuesday",
                delivery_time: "3:00-3:15",
                special_instructions: null
                }
            ]
        },
        {
            id: 5,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Ana",
            email: "anastasia.strayton@gmail.com",
            phone: null,
            username: "ana",
            password: "password",
            workplace_accounts: [ ]
        },
        {
            id: 9,
            active: false,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Clarissa",
            email: "foodbyclarissa@gmail.com",
            phone: null,
            username: null,
            password: null,
            workplace_accounts: [ ]
        },
        {
            id: 3,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Eliza",
            email: "eliza@9mileseast.com",
            phone: null,
            username: "eliza",
            password: "password",
            workplace_accounts: [
                {
                id: 1,
                active: true,
                manager_id: 3,
                company_name: "ACME Corp",
                company_address: "123 Main St",
                company_city: "Albuquerque",
                company_zip_code: "99999 ",
                ctct_email_list: "ACME Corp",
                scheduling_contact_name: "Jo",
                scheduling_contact_phone: null,
                scheduling_contact_email: "jo@acmecorp.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "monday",
                delivery_time: "9:00-9:20",
                special_instructions: "Bring an anvil and some TNT"
                }
            ]
        },
        {
            id: 4,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Gordon",
            email: "gordon@9mileseast.com",
            phone: null,
            username: "gordon",
            password: "password",
            workplace_accounts: [
                {
                id: 5,
                active: true,
                manager_id: 4,
                company_name: "Krusty Krab",
                company_address: "102 Coral Reef",
                company_city: "Bikini Bottom",
                company_zip_code: null,
                ctct_email_list: "Krusty Krab",
                scheduling_contact_name: "Mr. Krabs",
                scheduling_contact_phone: "555-1000",
                scheduling_contact_email: "mrkrabs@krustykrab.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "wednesday",
                delivery_time: "10:00-10:20",
                special_instructions: "Park in the visitor spot"
                }
            ]
        },
        {
            id: 7,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Lisa",
            email: "lbzmag@comcast.net",
            phone: null,
            username: "lisa",
            password: "password",
            workplace_accounts: [
                {
                id: 6,
                active: true,
                manager_id: 7,
                company_name: "Bob's Burgers",
                company_address: "2 Carnivore Terrace",
                company_city: "Seymour's Bay",
                company_zip_code: null,
                ctct_email_list: "Bob's Burgers",
                scheduling_contact_name: "Bob",
                scheduling_contact_phone: "555-1000",
                scheduling_contact_email: "bob@bobsburgers.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "thursday",
                delivery_time: "10:00-10:20",
                special_instructions: "Set up in the store room"
                },
                {
                id: 8,
                active: true,
                manager_id: 7,
                company_name: "Fake Co 2",
                company_address: "2 Fake Way",
                company_city: "Woburn",
                company_zip_code: "00001",
                ctct_email_list: "Fake Co 2",
                scheduling_contact_name: "Josie",
                scheduling_contact_phone: null,
                scheduling_contact_email: "Josie@fakeco.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "monday",
                delivery_time: "11:15-11:25",
                special_instructions: null
                }
            ]
        },
        {
            id: 6,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Liz",
            email: "liz.burton147@gmail.com",
            phone: "773-710-8686",
            username: "liz",
            password: "password",
            workplace_accounts: [ ]
        },
        {
            id: 2,
            active: true,
            market: {
            id: 2,
            name: "Boston",
            created_at: "2018-09-30T14:29:47.135Z",
            updated_at: "2018-09-30T14:29:47.135Z"
            },
            name: "Sarah",
            email: "sarah@9mileseast.com",
            phone: null,
            username: "sarah",
            password: "password",
            workplace_accounts: [
                {
                id: 2,
                active: true,
                manager_id: 2,
                company_name: "Slate Rock and Gravel Company",
                company_address: "123 Rocky Road",
                company_city: "Bedrock",
                company_zip_code: null,
                ctct_email_list: "Slate Rock and Gravel",
                scheduling_contact_name: "Mr. Slate",
                scheduling_contact_phone: null,
                scheduling_contact_email: "Mr.Slate@SlateRockandGravel.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "wednesday",
                delivery_time: "10:20-10:45",
                special_instructions: null
                },
                {
                id: 4,
                active: true,
                manager_id: 2,
                company_name: "Spacely Sprockets",
                company_address: "5 Milky Way Place",
                company_city: "Ionosphere",
                company_zip_code: null,
                ctct_email_list: "Spacely Sprockets",
                scheduling_contact_name: "Mr. Spacely",
                scheduling_contact_phone: "555-1000",
                scheduling_contact_email: "mrspacely@spacelysprockets.com",
                hr_contact_name: null,
                hr_contact_phone: null,
                hr_contact_email: null,
                delivery_day: "tuesday",
                delivery_time: "10:00-10:20",
                special_instructions: "The key is under the mat"
                }
            ]
        }    
    ]


const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;