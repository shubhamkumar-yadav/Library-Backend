import { ContactForm } from "../model/comment.js";
const getUser = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new ContactForm(user);
        await newUser.save();
        response.status(200).json({
            success: true,
            message: "Data added successfully",
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export { getUser };