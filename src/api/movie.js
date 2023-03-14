import { useQuery, useQueryClient } from 'react-query';
import { API_BASE_URL, API_KEY, API_SEARCH_URL } from '../constants/ApiRoutes';

export const useFetchMovies = ({
    pageNo = 1,
}) => {
    const queryClient = useQueryClient();

    return useQuery(
        ['movies', { pageNo }],
        () => (
            fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNo}`).then((res) => res.json()).catch((e) => new Error(e))
        ),
        {
            staleTime: 10000,
            keepPreviousData: true,
            retry: 0,
            onSuccess: ({ results }) => {
                results?.forEach((result) => {
                    queryClient.setQueryData(['result', result.uuid], {
                        result
                    });
                });
            },
        },
    );
};

export const useFetchMovie = ({ movieId }) => {
    const queryClient = useQueryClient();

    return (
        useQuery(
            ['movie', movieId],
            () => (
                fetch(`${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then((res) => res.json())
            ),
            {
                staleTime: 10000,
                enabled: !!movieId,
                onSuccess: (response) => {
                    queryClient.setQueryData(['movie', movieId], response);
                },
            },
        )
    );
};

export const useSearchMovies = ({
    name = '',
}) => (
    useQuery(
        ['search', { name }],
        () => (
            fetch(`${API_SEARCH_URL}${name}&api_key=${API_KEY}`).then((res) => res.json())
        ),
        {
            staleTime: 10000,
            enabled: (name.length > 2),
        },
    )
);
