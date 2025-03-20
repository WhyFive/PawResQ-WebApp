interface User {   
  id: string;   
  email: string;   
  username: string;   
  password: string; 
}  

interface AuthResponse {   
  user: User | null;   
  error: string | null; 
}  

const USERS_KEY = "app_users"; 
const CURRENT_USER_KEY = "current_user";  

// Helper to get users from localStorage 
const getUsers = (): Record<string, User> => {   
  const users = localStorage.getItem(USERS_KEY);   
  return users ? JSON.parse(users) : {}; 
};  

// Helper to save users to localStorage 
const saveUsers = (users: Record<string, User>) => {   
  localStorage.setItem(USERS_KEY, JSON.stringify(users)); 
};  

// Simple ID generator 
const generateId = () => `user_${Date.now()}`;

// Initialize some dummy users  
const initializeDummyUsers = () => {   
  const dummyUsers: Record<string, User> = {     
    "user1@example.com": {       
      id: generateId(),       
      username: "userA",       
      email: "user1@example.com",       
      password: "user1",     
    },     
    "user2@example.com": {       
      id: generateId(),       
      username: "userB",       
      email: "user2@example.com",       
      password: "user2",     
    },  
    "kkliang@example.com": {       
      id: generateId(),       
      username: "kkliang",       
      email: "kkliang@example.com",       
      password: "kkliang",     
    },    
  };   
  saveUsers(dummyUsers); 
};  

initializeDummyUsers();  

export const auth = {   
  signUp: async (email: string, username: string, password: string): Promise<AuthResponse> => {     
    const users = getUsers();      

    if (users[email]) {       
      return { user: null, error: "User already exists" };     
    }      

    const newUser: User = {       
      id: generateId(),       
      email,       
      username,       
      password,     
    };      

    users[email] = newUser;     
    saveUsers(users);      

    return { user: newUser, error: null };   
  },    

  signIn: async (email: string, password: string): Promise<AuthResponse> => {     
    const users = getUsers();     
    const user = users[email];      

    if (!user || user.password !== password) {       
      return { user: null, error: "Invalid email or password" };     
    }      

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));     
    return { user, error: null };   
  },    

  signOut: async () => {     
    localStorage.removeItem(CURRENT_USER_KEY);   
  },    

  getUser: async (): Promise<{ user: User | null }> => {     
    const userStr = localStorage.getItem(CURRENT_USER_KEY);     
    return { user: userStr ? JSON.parse(userStr) : null };   
  }, 
};
