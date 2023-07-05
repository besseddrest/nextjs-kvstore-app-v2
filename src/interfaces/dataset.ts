import { StorageType } from './storage_type';
import { ReviewStatus } from './review_status';

export default interface Dataset {
  id: number,
  name: string,
  owner: string,
  description: string,
  storage_type: StorageType,
  size: number // GB
  qps: {
    get: number,
    set?: number,
    del?: number,
  },
  review_status: ReviewStatus,
  cluster: number | null, // cluster ID
  partitions: number | null,
  admin: number | null, // user ID or string?
  is_pii: boolean,
  ttl?: number,
  rate_limit?: number, // display for bootstrap datasets
  kafka_topic?: string, // display for bootstrap datasets
}