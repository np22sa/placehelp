export default function(context) {
    // if (process.client) { context.store.dispatch("initAuth", null); }
    context.store.dispatch("initAuth", context.req);
}