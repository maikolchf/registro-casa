import clsx from 'clsx';
import React, { forwardRef } from 'react'
import { Controller, ControllerRenderProps, FieldError } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

type NumericInputProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
}

const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(({ onChange, className, ...rest }, ref) => {
    return (
        <NumericFormat
            {...rest}
            getInputRef={ref}
            thousandSeparator={true}
            prefix={'₡'}
            decimalScale={2}
            fixedDecimalScale={true}
            allowNegative={false}
            className={className}
            onValueChange={(values) => {
                onChange({
                    target: {
                        value: values.value,
                    },
                } as React.ChangeEvent<HTMLInputElement>);
            }}
        />
    );
});

interface Props {
    field: ControllerRenderProps<any, string>
    hayError: FieldError | undefined
}

export const InputNumerico = ({ hayError, field}: Props) => {
    return (

        <NumericInput
            {...field}
            className={clsx(
                "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                {
                    "border-red-500": hayError
                }
            )}
        />
    )
}
