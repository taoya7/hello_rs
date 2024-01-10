async function main() {
    const module = await import('../pkg/hello_wasm.js');
    module.greet();
}
main();
