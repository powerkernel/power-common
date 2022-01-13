/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import EventMeta from '../types/event-meta';
import Topics from './../types/topics';

interface OtpCreatedEvent {
  topic: Topics.OtpCreated;
  data: {
    meta: EventMeta;
    content: {
      id: string;
      identifier: string;
      action: string;
      code: string;
      attempts: number;
      used: boolean;
      expiresAt: string;
      ip: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
export default OtpCreatedEvent;
