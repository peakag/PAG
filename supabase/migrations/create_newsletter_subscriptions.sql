-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  source VARCHAR(50) DEFAULT 'footer' NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  unsubscribe_token UUID DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);

-- Create index on subscribed_at for date-based queries
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON newsletter_subscriptions(subscribed_at);

-- Create index on is_active for filtering active subscriptions
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_is_active ON newsletter_subscriptions(is_active);

-- Add RLS (Row Level Security) policies
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts (for new subscriptions)
CREATE POLICY "Allow newsletter subscription inserts" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Policy to allow select for authenticated users (for admin purposes)
CREATE POLICY "Allow newsletter subscriptions read for authenticated users" ON newsletter_subscriptions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy to allow updates for authenticated users (for admin purposes)
CREATE POLICY "Allow newsletter subscriptions update for authenticated users" ON newsletter_subscriptions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_newsletter_subscriptions_updated_at 
  BEFORE UPDATE ON newsletter_subscriptions 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE newsletter_subscriptions IS 'Stores email subscriptions for newsletter';
COMMENT ON COLUMN newsletter_subscriptions.email IS 'Subscriber email address (unique)';
COMMENT ON COLUMN newsletter_subscriptions.source IS 'Source of subscription (footer, popup, etc.)';
COMMENT ON COLUMN newsletter_subscriptions.is_active IS 'Whether subscription is active or unsubscribed';
COMMENT ON COLUMN newsletter_subscriptions.unsubscribe_token IS 'Unique token for unsubscribe links';
