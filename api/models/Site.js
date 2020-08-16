import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const siteSchema = Schema(
  {
    url: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Site', siteSchema);
