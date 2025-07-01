import {useEffect, useState} from 'react';
import type {ZodSchema} from 'zod';

export function useFetchAndValidateJSON<T>(url: string, schema: ZodSchema<T>) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				const json = await res.json();

				const result = schema.safeParse(json);
				if (!result.success) {
					console.error(result.error.format());
					throw new Error('Invalid data format');
				}
				setData(result.data);
			} catch (err) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, schema]);
	return {data, loading, error};
}
