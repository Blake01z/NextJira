
interface SeedData {
    entries: SeedEntry[]
}


interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries:[
        {
            description: 'Pendiente Voluptate eiusmod tempor velit elit. Mollit cillum dolore voluptate.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso Mollit ea cillum consectetur in.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas Esse irure laborum irure qui dolor commodo reprehenderit.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}