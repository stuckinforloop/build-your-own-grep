import sys

# import pyparsing - available if you need it!
# import lark - available if you need it!


def match_single_character(input_line, character):
    return input_line.count(character) > 0


def match_digit(input_line):
    return any(character.isdigit() for character in input_line)


def match_pattern(input_line, pattern):
    if pattern == "\\d":
        return match_digit(input_line)
    elif len(pattern) == 1:
        return match_single_character(input_line, pattern)
    else:
        raise RuntimeError(f"Unhandled pattern: {pattern}")


def main():
    pattern = sys.argv[2]
    input_line = sys.stdin.read()

    if sys.argv[1] != "-E":
        print("Expected first argument to be '-E'")
        exit(1)

    if match_pattern(input_line, pattern):
        exit(0)
    else:
        exit(1)


if __name__ == "__main__":
    main()
