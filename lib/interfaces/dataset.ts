import { StorageType } from './storage_type';
import { ReviewStatus } from './review_status';

export default interface Dataset {
  id: number,
  name: string,
  owner: string,
  description: string,
  storage_type: string,
  size: number // GB
  qps_get: number,
  qps_set?: number,
  qps_del?: number,
  review_status: string,
  cluster: number | null, // cluster ID
  partitions: number | null,
  admin: number | null, // user ID or string?
  ttl?: number,
}