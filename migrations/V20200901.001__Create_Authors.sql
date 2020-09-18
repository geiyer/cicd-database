
CREATE TABLE public.authors (
    id integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);



ALTER TABLE public.authors OWNER TO postgres;