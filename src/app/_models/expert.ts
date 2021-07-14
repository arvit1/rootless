export interface Expert {
    id: number;
    expert_id: number;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    topics: string[];
    learnings: string;
    time: string;
    industry_id: string;
    popular: boolean;
    schedule: string;
    address: string;
    delete_date?: any;
    create_date: Date;
    update_date: Date;
}

export interface AllExperts {
    items: Expert[];
    page: number;
    size: number;
    total: number;
}
