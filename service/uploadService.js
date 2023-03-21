import cloudinary from "../config/cloudinary.js";


export async function uploadImage(result) {

    const res = cloudinary.v2.uploader.upload(result.path, {
        folder: "product",
        use_filename: true
    });

    return (await res).secure_url



}