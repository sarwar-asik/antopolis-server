/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const uploadDestination = './uploads/';

if (!fs.existsSync(uploadDestination)) {
  try {
    fs.mkdirSync(uploadDestination, { recursive: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error creating directory:', err);
  }
}

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, uploadDestination);
  },
  filename: function (req: any, file: any, cb: any) {
    const extName = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(extName, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();
    cb(null, fileName + extName);
  },
});

// const upload = multer({ storage: storage });

const upload = multer({ storage: storage });

export default upload;
