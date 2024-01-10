use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn md5(input: &str)-> String {
    let digest = md5::compute(input);
    format!("{:x}", digest)
}