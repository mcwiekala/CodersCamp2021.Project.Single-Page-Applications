const cinemaHalls = [
        {
            numberOfSeats: { rows: 9, columns: 14 },
            filmShowing: [
                {
                  id: 1,
                  title: "Avengers",
                  seatsTakes: [
                  { row: 4, column: 5 },
                  { row: 4, column: 6 },
                  { row: 2, column: 8 },
                  { row: 2, column: 5 },
                  { row: 9, column: 10 },
                  { row: 4, column: 12 },
                  { row: 3, column: 1 },
                    ],
                  ticketPrice: [15.99, 29.99]
                },
                {
                    id: 2,
                    title: "Iniemamocni",
                    seatsTakes: [
                    { row: 4, column: 5 },
                    { row: 4, column: 6 },
                    { row: 2, column: 8 },
                    { row: 2, column: 5 },
                    { row: 9, column: 10 },
                    { row: 4, column: 12 },
                    { row: 3, column: 1 },
                      ],
                    ticketPrice: [15.99, 29.99]
                  },
                  {
                    id: 3,
                    title: "Skazani na Shawshank",
                    seatsTakes: [
                    { row: 4, column: 5 },
                    { row: 4, column: 6 },
                    { row: 2, column: 8 },
                    { row: 2, column: 5 },
                    { row: 9, column: 10 },
                    { row: 4, column: 12 },
                    { row: 3, column: 1 },
                      ],
                    ticketPrice: [15.99, 29.99]
                  },
              ]             
        },
        {
            numberOfSeats: { rows: 10, columns: 16 },
            filmShowing: [
                {
                  id: 1,
                  title: "Avengers",
                  seatsTakes: [
                  { row: 4, column: 5 },
                  { row: 4, column: 6 },
                  { row: 2, column: 8 },
                  { row: 2, column: 5 },
                  { row: 9, column: 10 },
                  { row: 4, column: 12 },
                  { row: 3, column: 1 },
                    ],
                  ticketPrice: [15.99, 29.99]
                },
                {
                    id: 2,
                    title: "Iniemamocni",
                    seatsTakes: [
                    { row: 4, column: 5 },
                    { row: 4, column: 6 },
                    { row: 2, column: 8 },
                    { row: 2, column: 5 },
                    { row: 9, column: 10 },
                    { row: 4, column: 12 },
                    { row: 3, column: 1 },
                      ],
                    ticketPrice: [15.99, 29.99]
                  },
                  {
                    id: 3,
                    title: "Skazani na Shawshank",
                    seatsTakes: [
                    { row: 4, column: 5 },
                    { row: 4, column: 6 },
                    { row: 2, column: 8 },
                    { row: 2, column: 5 },
                    { row: 9, column: 10 },
                    { row: 4, column: 12 },
                    { row: 3, column: 1 },
                      ],
                    ticketPrice: [15.99, 29.99]
                  },
              ]             
        },
    ]

const reservations = [
    {
        userId: 1,
        hallId: 0,
        filmDateTime: 2,
        seat: { row: 3, column: 9},
        movieId: 10,
        pickupCode: 19345,
        status: "ACTIVE"
    }, 
    {
        userId: 129,
        hallId: 3,
        filmDateTime: 3,
        seat: { row: 8, column: 10},
        movieId: 13,
        pickupCode: 18345,
        status: "ACTIVE"
    },
    {
        userId: 82,
        hallId: 2,
        filmDateTime: 0,
        seat: { row: 1, column: 2},
        movieId: 21,
        pickupCode: 19445,
        status: "ACTIVE"
    }
]