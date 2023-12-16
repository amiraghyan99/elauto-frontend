type Submitter<T> = (fields: T) => void | Promise<void>;

type FormObject<T> = {
    fields: T;
    processing: boolean;
    error: any;
    clearError: () => void;
    reset: () => void;
    data: () => T;
    submit: (submitter: Submitter<T>) => Promise<void>;

}
export default function useForm<T extends Record<string, any>>(fields: T) {
    const initialFields: T = {...fields};

    return reactive<FormObject<T>>({
        fields,
        processing: false,
        error: null,
        clearError() {
            this.error = null
        },
        reset() {
            Object.keys(this.fields).forEach((key) => {
                if (key in initialFields) {
                    this.fields[key as keyof T] = initialFields[key as keyof T];
                }
            });
        },
        data() {
            return this.fields
        },
        async submit(submitter) {
            if (this.processing) return;

            this.processing = true;

            try {
                await submitter(this.fields);
            } catch (err: any) {
                this.error = err;
            } finally {
                this.processing = false;
            }

        },
    });
}
