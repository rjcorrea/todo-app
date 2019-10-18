export function middleware(router, axios){
    axios.interceptors.response.use(null, (error) => {
        if(error.response.status == 401 || error.response.status == 403){
            localStorage.clear();
            router.push('/login');
        }

        return Promise.reject(error);
    });

    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = JSON.parse(localStorage.getItem('user'));

        if(currentUser){
            axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser.access_token}`;
        }

        if(requiresAuth && !currentUser){
            next('/login');
        } else if(to.path == '/login' && currentUser) {
            next('/');
        } else {
            next();
        }
    });
}