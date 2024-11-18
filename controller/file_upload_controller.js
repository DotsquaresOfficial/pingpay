
const multer = require('multer');
const { internalServerException } = require('../helpers/exceptions');

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });

// API to upload image
const uploadFile = async (req, res) => {
    try {
        // Use Multer to handle the file upload
        upload.single('file')(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: 'File upload error', error: err.message });
            }
            
            // Check if a file was uploaded
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            // Extract details
            const fileUrl = `/uploads/${req.file.filename}`;

            res.status(200).json({
                message: 'File uploaded successfully',
                data: { fileUrl: fileUrl }
            });
        });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

module.exports = { uploadFile };
