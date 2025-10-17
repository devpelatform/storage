import { loadCloudinaryConfig } from './config';
import { CloudinaryService } from './services/cloudinary';
import type { CloudinaryConfig } from './types';

// === SERVICE CLASSES ===
export { CloudinaryService } from './services/cloudinary';

// === MAIN FACTORY FUNCTIONS (Primary API) ===
/**
 * Create Cloudinary service using environment variables or manual configuration
 * @param config Optional Cloudinary configuration. If not provided, loads from environment variables
 * @returns CloudinaryService instance
 * @throws Error if configuration is invalid or environment variables are missing
 * @public
 *
 * @example
 * ```typescript
 * import { createCloudinary } from '@pelatform/storage/cloudinary';
 *
 * // Using environment variables
 * // Set: PELATFORM_CLOUDINARY_CLOUD_NAME=my-cloud, PELATFORM_CLOUDINARY_API_KEY=123..., etc.
 * const cloudinaryFromEnv = createCloudinary();
 * await cloudinaryFromEnv.uploadFile('photo.jpg', imageBuffer);
 *
 * // Using manual configuration
 * const cloudinary = createCloudinary({
 *   provider: 'cloudinary',
 *   cloudName: 'my-cloud-name',
 *   apiKey: '123456789012345',
 *   apiSecret: 'your-api-secret',
 *   secure: true,
 *   folder: 'uploads'
 * });
 *
 * // Upload with transformations
 * await cloudinary.uploadFile('profile-pic.jpg', imageBuffer);
 *
 * // Get optimized URL
 * const publicUrl = cloudinary.getPublicUrl('profile-pic.jpg');
 * console.log(publicUrl); // Cloudinary optimized URL
 * ```
 */
export function createCloudinary(): CloudinaryService;
export function createCloudinary(config: CloudinaryConfig): CloudinaryService;
export function createCloudinary(config?: CloudinaryConfig): CloudinaryService {
  if (config) {
    return new CloudinaryService(config);
  }
  const envConfig = loadCloudinaryConfig();
  return new CloudinaryService(envConfig);
}
