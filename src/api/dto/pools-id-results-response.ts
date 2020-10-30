/* tslint:disable */
export type PoolsIdResultsResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    /**
     * Success
     */
    ? boolean
    : TContentType extends 'application/json'
      /**
       * Success
       */
    ? boolean
    : TContentType extends 'text/json'
      /**
       * Success
       */
    ? boolean
    : any
  : any;
