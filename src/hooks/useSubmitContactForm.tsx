import { SubmissionStatus } from '@/components/Buttons';
import { useCallback, useEffect, useState } from 'react';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface SubmitContactForm {
  onSubmit: (values: ContactFormValues) => Promise<void>;
  loading: SubmissionStatus;
}

export const useSubmitContactForm = (): SubmitContactForm => {
  const [loading, setLoading] = useState<SubmissionStatus>('inactive');
  useEffect(() => {
    if (loading === 'success' || loading === 'error') {
      setTimeout(() => {
        setLoading('inactive');
      }, 3000);
    }
  }, [loading]);

  const onSubmit = useCallback(async (values: ContactFormValues) => {
    const url = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
    const apiKey = process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY;
    setLoading('pending');

    if (url && apiKey) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.ksextonexe.info/',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setLoading('success');
          }
        })
        .catch((error) => {
          if (error) {
            setLoading('error');
          }
        });
    } else {
      setLoading('error');
    }
  }, []);

  return { onSubmit, loading };
};
