import auth from '@/services/auth'
export default {
    methods: {
        getUser : () => {
            return auth.getUser();
        }
    }
  }