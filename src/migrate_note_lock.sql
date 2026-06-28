-- Add note lock support for existing D1 databases.
ALTER TABLE notes ADD COLUMN is_locked INTEGER DEFAULT 0 NOT NULL;
