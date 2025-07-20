export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    street:   string;
    suite:    string;
    city:     string;
    zipcode:  string;
    lat:      string;
    lng:      string;
    phone:    string;
    website:  string;
    companyName: string;
    catchPhrase: string;
    bs: string;
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}