export default defineNuxtPlugin(async () => {
    const { user, setUser } = useAuth();

    // Skip if already initialized on server
    if (user.value !== undefined) return;

    await setUser();
});
