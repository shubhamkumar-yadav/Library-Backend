import mongoose from 'mongoose';
const contactFormSchema = new mongoose.Schema(
    {
      id: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    }
  );
const ContactForm = mongoose.model('libraryData',contactFormSchema);
export {ContactForm};